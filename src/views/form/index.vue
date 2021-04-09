<template>
  <div>
    <h1>Form Validate with Yup, Not using useForm hook</h1>
    <Form @submit="submit" :validation-schema="simpleSchema">
      <Field
        name="email"
        type="email"
        class="field"
        aria-placeholder="email"
        placeholder="email..."
      />
      <ErrorMessage name="email" />

      <Field
        name="password"
        type="password"
        aria-placeholder="password"
        placeholder="password"
        class="field"
      />
      <ErrorMessage name="password" />

      <button>Submit</button>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'FormValidateYup',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const simpleSchema = yup.object({
      email: yup
        .string()
        .required()
        .email(),
      name: yup.string().required(),
      password: yup
        .string()
        .required()
        .min(8),
    });

    return {
      simpleSchema,
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return 'This is required';
    },
  },
};
</script>

<style lang="scss" scoped></style>
