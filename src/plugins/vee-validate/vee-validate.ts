import { defineNuxtPlugin } from '#app';
import { defineRule } from 'vee-validate';
import { required, email, integer, min, min_value as minValue, regex } from '@vee-validate/rules';

export default defineNuxtPlugin(() => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('integer', integer);
  defineRule('min', min);
  defineRule('min_value', minValue);
  defineRule('regex', regex);
});
