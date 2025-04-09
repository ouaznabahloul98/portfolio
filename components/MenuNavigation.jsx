import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/ManuNavigation.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MenuNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false); // Ferme le menu après clic
  };

  return (
    <>
      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <div onClick={() => handleNavigation('/')} className={styles.path}>Accueil</div>
        <div onClick={() => handleNavigation('/projects')} className={styles.path}>Projets</div>
        <div onClick={() => handleNavigation('/about')} className={styles.path}>À propos</div>
        <div onClick={() => handleNavigation('/contact')} className={styles.path}>Contact</div>
        <div onClick={() => handleNavigation('/temoignage')} className={styles.path}>Témoignages</div>
        <div onClick={() => handleNavigation('/signup')} className={styles.path}>Créer un compte</div>
        <div onClick={() => handleNavigation('/login')} className={styles.path}>Se connecter</div>
      </nav>
    </>
  );
}
