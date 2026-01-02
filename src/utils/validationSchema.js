import * as yup from 'yup';

export const SIGNAP_VALIDATION_SCHEMA = yup.object({
    fullName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'Name must starts wich capital letter ')
    .required(),

    email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),

    password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])/,
      'Password must include uppercase, lowercase, number and special character'
    ),

    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),

    acceptTerms: yup
    .boolean()
    .oneOf([true])
})