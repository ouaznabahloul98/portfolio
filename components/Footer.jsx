import styles from '@/styles/Footer.module.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/bahloulouazna98/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <AiFillLinkedin size={24} />
        </a>
        <a
          href="https://github.com/ouaznabahloul98"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <AiFillGithub size={24} />
        </a>
      </div>
      <div className={styles.right}>© 2025 Ouazna Bahloul</div>
    </footer>
  );
}
