import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/reduxStore/authSlice';
import { useRouter } from 'next/router';
import styles from '@/styles/AuthForm.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [userExists, setUserExists] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.auth.users);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email requis.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format email invalide.';
    }

    if (!password.trim()) {
      newErrors.password = 'Mot de passe requis.';
    } else if (password.length < 6) {
      newErrors.password = 'Mot de passe trop court (min. 6 caractères).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserExists(false);

    if (!validate()) return;

    const alreadyExists = users.some((u) => u.email === email);
    if (alreadyExists) {
      setUserExists(true);
      return;
    }

    dispatch(register({ email, password }));
    alert('Compte créé avec succès !');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Créer un Compte</h2>
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

        {userExists && <p className={styles.error}>Cet utilisateur existe déjà.</p>}

        <button type="submit" className={styles.button}>Créer un compte</button>
      </form>
    </div>
  );
}
