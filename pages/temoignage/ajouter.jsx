import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addTemoignage } from '@/reduxStore/temoignageSlice';
import styles from '@/styles/Temoignage.module.css';

export default function AjouterTemoignage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // 🔐 Rediriger vers /login si non connecté
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser]);

  if (!currentUser) return null;

  const validate = () => {
    const newErrors = {};
    if (!nom.trim()) {
      newErrors.nom = 'Le nom est requis.';
    } else if (nom.length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères.';
    }

    if (!message.trim()) {
      newErrors.message = 'Le message est requis.';
    } else if (message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newTemoin = {
      id: Date.now(),
      nom,
      message,
    };

    dispatch(addTemoignage(newTemoin));
    router.push('/temoignage');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ajouter un témoignage</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Votre Nom"
          className={styles.input}
        />
        {errors.nom && <p className={styles.error}>{errors.nom}</p>}

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          className={styles.textarea}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        <button type="submit" className={styles.button}>Envoyer</button>
      </form>
    </div>
  );
}
