import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGNAP_VALIDATION_SCHEMA } from '../../utils/validationSchema';
import classNames from 'classnames';
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
          const inputNameClassNames = classNames(styles.inputElement, {
            [styles.inputValid]: values.fullName,
            [styles.inputInvalid]: !values.fullName,
          });
          return (
            <Form className={styles.formBase}>
              <h2 className={styles.title}>Sign up</h2>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Full Name</span>
                <Field
                  className={inputNameClassNames}
                  type='text'
                  name='fullName'
                  autoFocus
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.errorComponent}
                    name='fullName'
                    component={'span'}
                  />
                </div>
              </label>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Email</span>
                <Field
                  className={styles.inputElement}
                  type='email'
                  name='email'
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.errorComponent}
                    name='email'
                    component={'span'}
                  />
                </div>
              </label>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Password</span>
                <Field
                  className={styles.inputElement}
                  type='password'
                  name='password'
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.errorComponent}
                    name='password'
                    component={'span'}
                  />
                </div>
              </label>
              <label className={styles.labelContainer}>
                <span className={styles.labelText}>Confirm Password</span>
                <Field
                  className={styles.inputElement}
                  type='password'
                  name='confirmPassword'
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.errorComponent}
                    name='confirmPassword'
                    component={'span'}
                  />
                </div>
              </label>
              <label>
                <Field
                  className={styles.checkboxElement}
                  type='checkbox'
                  name='acceptTerms'
                />
                <span>I agree to the terms and conditions</span>
              </label>
              <button
                className={styles.buttonSubmit}
                type='submit'
                disabled={!values.acceptTerms}
              >
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
