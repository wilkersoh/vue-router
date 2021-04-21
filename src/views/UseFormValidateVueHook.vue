<template>
  <div>
    <h1>useForm and useField Validate</h1>
    <p>View validate <router-link class="underline" :to="{name: 'FormValidateAndField'}">Field and Form Component</router-link></p>
    <pre>errors: {{ errors }}</pre>
    <form @submit="onSubmit" class="flex justify-center">
      <div class="flex flex-col mt-4 w-92">
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="name">Name: </label>
          <input v-model="name" type="text" name="name" id="name" placeholder="Name" autocomplete="name" class="field" :class="{'danger': errors.hasOwnProperty('name')}"  />
        </div>
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="email">email: </label>
          <input v-model="email" type="text" name="email" id="email" placeholder="Email" autocomplete="email" class="field" :class="{'danger': errors.hasOwnProperty('email')}"  />
        </div>
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="password">Password: </label>
          <input v-model="password" type="password" name="password" id="password" placeholder="Password" autocomplete="current-password" class="field" :class="{'danger': errors.hasOwnProperty('password')}"  />
        </div>
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="passwordConfirmation">Password Confirmation: </label>
          <input v-model="passwordConfirmation" type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Password" autocomplete="password-confirmation" class="field" :class="{'danger': errors.hasOwnProperty('passwordConfirmation')}"  />
        </div>
        <div class="flex justify-center items-center">

        </div>
        <button class="mt-2 btn-blue" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { useField, useForm, Form, Field, ErrorMessage } from 'vee-validate';
  import { object, string } from 'yup';
  import sleep from "../utils/sleep";

  export default {
    name: 'UseFormValidateVueHook',
    components: { Form, Field, ErrorMessage },
    setup() {
      const initial = {
        initialValues: {
          name: 'wilker',
          password: '',
          confirmation: '',
        },
        initialErackrors: {},
      }
      const schema = object({
        name: string().required("Name is required").min(6),
        email: string().required().email(),
        password: string().matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/, 'Need one special character').min(8).label('Your Password'),
        passwordConfirmation: string().test('passwords-match', 'Passwords must match', function(value) {
          /**
              test(testNameAnyYouWant, 'error msg', function can get current scope value)
           */
          return this.parent.password === value
        })
      })

      const { handleSubmit, isSubmitting, resetForm, setFieldError, setErrors, errors, meta } = useForm({...initial, validationSchema: schema});

      const {value: name, handleChange: handleChangeName} = useField("name")
      const {value: email} = useField("email")
      const {value: password} = useField("password")
      const {value: passwordConfirmation} = useField("passwordConfirmation");

      const onSubmit = handleSubmit( async (values) => {
        console.log(`isSubmitting`, isSubmitting)
        console.log(`values`, values)
        await sleep(5000)
        console.log(`isSubmitting below`, isSubmitting)
      });

      return {
        onSubmit,
        isSubmitting,
        name,
        email,
        password,
        passwordConfirmation,
        errors,
        meta,
      }
    }
  }
</script>
