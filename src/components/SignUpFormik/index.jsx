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
      <Formik
        initialValues={loginInitialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGNAP_VALIDATION_SCHEMA}
      >
        {({ values }) => {
          return (
            <Form className={styles.formBase}>
              <h2 className={styles.title}>Sign up</h2>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Full Name</span>
                <Field className={styles.inputElement} type='text' name='fullName' autoFocus />
                <ErrorMessage className={styles.errorComponent} name='fullName' component={'span'} />
              </label>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Email</span>
                <Field className={styles.inputElement} type='email' name='email' />
                <ErrorMessage className={styles.errorComponent} name='email' component={'span'} />
              </label>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Password</span>
                <Field className={styles.inputElement} type='password' name='password' />
                <ErrorMessage className={styles.errorComponent} name='password' component={'span'} />
              </label>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Confirm Password</span>
                <Field className={styles.inputElement} type='password' name='confirmPassword' />
                <ErrorMessage className={styles.errorComponent} name='confirmPassword' component={'span'} />
              </label>
              <label>
                <Field
                  className={styles.checkboxElement}
                  type='checkbox'
                  name='acceptTerms'
                />
                <span>I agree to the terms and conditions</span>
              </label>
              <button className={styles.buttonSubmit} type='submit' disabled={!values.acceptTerms}>
                Sign up
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SignUpFormik;
