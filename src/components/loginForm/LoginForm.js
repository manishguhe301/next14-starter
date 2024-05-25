'use client';
import React from 'react';
import styles from './loginForm.module.css';
import Link from 'next/link';
import { login } from '../../../lib/action';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <div>
      {' '}
      <form className={styles.form} action={login}>
        <input type='text' placeholder='username' name='username' />
        <input type='password' placeholder='password' name='password' />
        <button>Login</button>
        {state?.error}
        <Link href='/register'>
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
