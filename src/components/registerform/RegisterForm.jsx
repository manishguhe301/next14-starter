import styles from './registerForm.module.css';
import Link from 'next/link';
import { register } from '../../../lib/action';
const RegisterForm = () => {
  return (
    <form className={styles.form} action={register}>
      <input type='text' placeholder='username' name='username' />
      <input type='email' placeholder='email' name='email' />
      <input type='password' placeholder='password' name='password' />
      <input
        type='password'
        placeholder='password again'
        name='passwordRepeat'
      />
      <button>Register</button>
      {/* {state?.error} */}
      <Link href='/login'>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
