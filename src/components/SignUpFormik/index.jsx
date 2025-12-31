import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGNAP_VALIDATION_SCHEMA } from '../../utils/validationSchema';
import styles from './SignUpFormik.module.scss';

function SignUpFormik () {
  const loginInitialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      {/* <h1>Create Your Account</h1> */}
      <Formik
        initialValues={loginInitialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGNAP_VALIDATION_SCHEMA}
      >
        {formikProps => {
          return (
            <Form className={styles.formBase}>
              <h2>Sign up</h2>
              <label>
                <span>Full Name</span>
                <Field type='text' name='fullName' autoFocus />
                <ErrorMessage name='fullName' component={'span'} />
              </label>
              <label>
                <span>Email</span>
                <Field type='email' name='email' />
                <ErrorMessage name='email' component={'span'} />
              </label>
              <label>
                <span>Password</span>
                <Field type='password' name='password' />
                <ErrorMessage name='password' component={'span'} />
              </label>
              <label>
                <span>Confirm Password</span>
                <Field type='password' name='confirmPassword' />
                <ErrorMessage name='confirmPassword' component={'span'} />
              </label>
              <label>
                <span>I agree to the terms and conditions</span>
                <Field type='checkbox' name='acceptTerms' />
                <ErrorMessage name='acceptTerms' component={'span'} />
              </label>
              <button type='submit'>Sign up</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SignUpFormik;
