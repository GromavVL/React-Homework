import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import classNames from "classnames";

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [agree, setAgree] = useState(false);

  const LOGIN_FORM_REX_EXP = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Паролі не совпадають!");
      return;
    }
    if (!agree) {
      alert("Треба погодитися з правилами");
      return;
    }
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgree(false);
    setIsEmailValid(null);
    setIsPasswordValid(null);
  };

  const handleEmailChange = ({ target: { value } }) => {
    setIsEmailValid(
      setEmail(value),
      isEmailValid(LOGIN_FORM_REX_EXP.email.test(value))
    );
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setIsPasswordValid(
      setPassword(value),
      isPasswordValid(LOGIN_FORM_REX_EXP.password.test(value))
    );
  };

  const emailClassNames = classNames(styles.input, {
    [styles.valid]: !isEmailValid,
    [styles.invalid]: isEmailValid,
  });

  const passwordClassName = classNames(styles.input, {
    [styles.valid]: !isPasswordValid,
    [styles.invalid]: isPasswordValid,
  });

  return (
    <main className={styles.mainHome}>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <h1 className={styles.formHeader}>Create Your Account</h1>
        <label className={styles.label} htmlFor="">
          <span className={styles.fieldTitle}>Full Name</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoFocus
          />
        </label>
        <label className={styles.label}>
          <span className={styles.fieldTitle}>Email</span>
          <input
            className={emailClassNames}
            type="email"
            placeholder="your@mail"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.fieldTitle}>Password</span>
          <input
            className={passwordClassName}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.fieldTitle}>Password confirmation</span>
          <input
            className={styles.input}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label className={styles.labelCheckbox}>
          <input
            className={styles.input}
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <p className={styles.checkboxText}>
            I Agree All Statements in Terms Of Service
          </p>
        </label>
        <button className={styles.submitSingUp} type="submit">
          Sing Up
        </button>
      </form>
    </main>
  );
}

export default SignUpForm;
