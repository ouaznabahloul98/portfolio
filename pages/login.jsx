import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/reduxStore/authSlice';
import { useRouter } from 'next/router';
import styles from '@/styles/AuthForm.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { users } = useSelector((state) => state.auth);


  const handleNavigation = (path) => {
    router.push(path);
  };

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email requis.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format email invalide.';
    }

    if (!password.trim()) {
      newErrors.password = 'Mot de passe requis.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalidCredentials(false);
    if (!validate()) return;

    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      setInvalidCredentials(true);
    } else {
      dispatch(login({ email, password }));
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Se connecter</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        {invalidCredentials && (
          <p className={styles.error}>Email ou mot de passe incorrect !</p>
        )}

        <button type="submit" className={styles.button}>Se connecter</button>
        <p>pas de compte ? <button onClick={() => handleNavigation('/signup')}>Inscrivez vous</button></p>
      </form>
    </div>
  );
}
