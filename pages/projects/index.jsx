import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from 'next/head';
import ProjectsCard from '@/components/ProjectsCard';
import styles from '@/styles/projects.module.css';
import img1 from '@/public/briquebleu.jpg';
import img2 from '@/public/homeservice.png';

export default function Projects() {
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (!currentUser) {
      router.push('/login'); // 🔐 redirection vers login si non connecté
    }
  }, [currentUser]);

  if (!currentUser) return null; // ne rien afficher tant que non connecté

  return (
    <>
      <Head>
        <meta name="description" content="Page contenant différents projets" />
        <title>Projects - Portfolio Ouazna</title>
      </Head>

      <section className={styles.section3}>
        <h1 className={styles.h1}>Projets</h1>

        <div className={styles.cards}>
          <Link href="/projects/project1" className={styles.card}>
            <ProjectsCard img={img1} name="Brique Échange" />
          </Link>
          <Link href="/projects/project2" className={styles.card}>
            <ProjectsCard img={img2} name="Home Service" />
          </Link>
        </div>
      </section>
    </>
  );
}
