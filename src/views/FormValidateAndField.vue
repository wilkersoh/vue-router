
<template>
  <div>
    <h1>Form and Field Component</h1>
    <p>View validate <router-link class="underline" :to="{name: 'UseFormValidateVueHook'}">use validate hook (form and field)</router-link></p>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, values }" class="flex justify-center">
      <div class="flex flex-col mt-4 w-92">
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="name">Name: </label>
          <Field type="text" name="name" id="name" placeholder="Name" autocomplete="name" class="field" :class="{'danger': errors.hasOwnProperty('name')}"  />
        </div>
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="email">email: </label>
          <Field type="text" name="email" id="email" placeholder="Email" autocomplete="email" class="field" :class="{'danger': errors.hasOwnProperty('email')}"  />
        </div>
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="password">Password: </label>
          <Field type="password" name="password" id="password" placeholder="Password" autocomplete="current-password" class="field" :class="{'danger': errors.hasOwnProperty('password')}"  />
        </div>
        <div class="flex justify-center items-center">
          <label class="text-right w-full pr-4" for="passwordConfirmation">Password Confirmation: </label>
          <Field type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Password" autocomplete="password-confirmation" class="field" :class="{'danger': errors.hasOwnProperty('passwordConfirmation')}"  />
        </div>
        <div class="flex justify-center items-center">

        </div>
        <button class="mt-2 btn-blue" type="submit">Submit</button>
        <div class="w-full">
          <pre>values: {{ JSON.stringify(values, null, 2)}}</pre>
          <pre>erros: {{ JSON.stringify(errors, null, 2)}}</pre>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
  import {Form, Field, ErrorMessage } from 'vee-validate';
  import { object, string } from 'yup';
  import sleep from "../utils/sleep";

  export default {
    name: 'FormValidateVue',
    components: { Form, Field, ErrorMessage },
    setup() {
      const schema = object({
        name: string().required("Name is required").min(6),
        email: string().required().email(),
        password: string().matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/, 'Need one special character').min(8).label('Your Password'),
        passwordConfirmation: string().test('passwords-match', 'Passwords must match', function(value) {
          return this.parent.password === value
        })
      })

      const onSubmit = (values) => {
        console.log(`values`, values)
      }

      return {
        schema,
        onSubmit
      }
    }
  }
</script>
