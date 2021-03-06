<template>
  <div class="px-4">
    <h1 class="text-xl text-center font-semibold mb-2">
      {{ isLogin ? 'Login' : 'Sign Up' }}
    </h1>
    <form>
      <input
        type="email"
        placeholder="Email Address"
        autocomplete="email"
        @change="emailField.handleChange"
        @blur="emailField.handleBlur"
        :value="emailField.value"
        class="field"
      />
      <p
        class="text-center text-red-500"
        :style="{
          visibility:
            emailField.meta.touched && !emailField.meta.valid
              ? 'visible'
              : 'hidden',
        }"
      >
        {{ emailField.errorMessage || 'Field is Required' }}
      </p>
      <input
        type="password"
        autocomplete="current-password"
        placeholder="Password"
        @input="
          passwordField.handleChange($event), confirmPasswordField.validate()
        "
        @blur="passwordField.handleBlur"
        :value="passwordField.value"
        class="field"
      />
      <p
        class="text-center text-red-500"
        :style="{
          visibility:
            passwordField.meta.touched && !passwordField.meta.valid
              ? 'visible'
              : 'hidden',
        }"
      >
        {{ passwordField.errorMessage || 'Field is Required' }}
      </p>
    </form>
    <template v-if="!isLogin">
      <input
        type="password"
        placeholder="Confirm Password"
        @input="confirmPasswordField.handleChange"
        @blur="confirmPasswordField.handleBlur"
        :value="confirmPasswordField.value"
        class="px-4 my-2 min-w-full mx-auto border border-gray-500 rounded-full focus:outline-none focus:ring-1 focus:border-blue-300"
      />
      <p
        :style="{
          visibility:
            confirmPasswordField.meta.touched &&
            !confirmPasswordField.meta.valid
              ? 'visible'
              : 'hidden',
        }"
        class="text-center text-red-500"
      >
        {{ confirmPasswordField.errorMessage || 'Field is Required' }}
      </p>
    </template>

    <div class="flex justify-center mt-4">
      <button
        class="btn btn-blue mx-1"
        :disabled="!formMeta.valid"
        @click="submitForm"
      >
        {{ isLogin ? 'Login' : 'Sign Up' }}
      </button>
    </div>
  </div>
</template>

<script>
import { useField, useForm } from 'vee-validate';
import { reactive, computed, watch } from 'vue';

import '../validators';

export default {
  name: 'LoginForm',
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
    isSubmitting: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    submitAuth: null, // null means we will not validate event
  },
  setup(props, { emit }) {
    const { meta: formMeta, handleSubmit } = useForm();

    /**
     * const { handleChange, hancleInput, handleBlur, value, errorMessage } = useForm('fieldName', rules, {options})
     */
    const emailField = reactive(
      useField('email', 'email', { validateOnValueUpdate: false })
    );
    const passwordField = reactive(useField('password', 'password'));

    const confirmPasswordValidator = computed(() => {
      console.log('isLogin', props.isLogin);
      return !props.isLogin ? 'confirmPassword:password' : () => true;
    });

    const confirmPasswordField = reactive(
      useField('confirmPassword', confirmPasswordValidator)
    );

    watch(
      () => props.isLogin, // changed then call confirmPasswordField.validate() to check
      () => {
        confirmPasswordField.validate();
      }
    );

    const submitForm = handleSubmit((formValues) => {
      emit('submitAuth', {
        email: formValues.email,
        password: formValues.password,
      });
    });

    return {
      emailField,
      passwordField,
      confirmPasswordField,
      submitForm,
      formMeta,
    };
  },
};
</script>
