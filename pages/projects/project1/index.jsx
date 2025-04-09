import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Image from 'next/image';
import styles from '@/styles/ProjectDetails.module.css';

export default function Project1() {
    const router = useRouter();
    const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        if (!currentUser) {
            router.push('/login'); // 🔐 redirection si non connecté
        }
    }, [currentUser]);

    if (!currentUser) return null; // ne rien afficher si non connecté

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Brique Échange</h1>

            <p className={styles.date}>📅 Réalisé durant la session d'automne 2024</p>

            <p className={styles.description}>
                Brique Échange est une application web interactive conçue pour permettre aux utilisateurs
                de créer des échanges personnalisés de briques de type LEGO. L'objectif est de sélectionner
                différentes couleurs et quantités de briques pour générer un échange nommé, simulant un
                système de troc basé sur la valeur individuelle de chaque brique.
            </p>

            <Image
                src="/brique.jpg"
                alt="Aperçu du projet Brique Échange"
                width={600}
                height={400}
                className={styles.image}
            />

            <div className={styles.techSection}>
                <h3 className={styles.techTitle}>Technologies utilisées</h3>
                <ul className={styles.techList}>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Handlebars</li>
                    <li>Express</li>
                    <li>SQL</li>
                </ul>
            </div>
        </section>
    );
}
