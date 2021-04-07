import { defineRule } from 'vee-validate';

defineRule('password', (value) => {
  if (!value || value.length <= 5 || value.length >= 30) {
    return 'Password must be between 6 - 30 character';
  }

  return true;
});

defineRule('confirmPassword', (value, [target], ctx) => {
  // ctx give the access to enter entire form
  /**
   * target return "password"
   * How target knows we want to link with password field?
   *  From below :password, it will say it confirmPassword, the target fieldName is password
   *  then since our ctx.form has the access to retrieve whole form data
    const confirmPasswordValidator = computed(() => {
      return !props.isLogin ? 'confirmPassword:password' : () => true;
    });
   *
   * value is the value from confirm password
   */
  if (value === ctx.form[target]) {
    // they are same then pass the validate
    return true;
  }

  return 'Password must match';
});

defineRule('email', (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }

  // check if email
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    )
  ) {
    return 'This field must be a valid email';
  }

  return true;
});
