import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Image from 'next/image';
import styles from '@/styles/ProjectDetails.module.css';

export default function Project2() {
    const router = useRouter();
    const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        if (!currentUser) {
            router.push('/login'); // 🔐 Redirection si non connecté
        }
    }, [currentUser]);

    if (!currentUser) return null; // Ne rien afficher tant que pas connecté

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Home Service</h1>

            <p className={styles.date}>📅 Réalisé en mai 2024</p>

            <p className={styles.description}>
                Projet développé en Node.js pour deux types de clients : ceux qui souhaitent publier un service et ceux qui souhaitent consulter les annonces et profiter de ces services. L'utilisateur peut créer, modifier et supprimer un service, ainsi que contacter le client. Le site est créé en utilisant le rendu client et le rendu serveur avec Node.js et Handlebars.
            </p>

            <Image
                src="/homeServiceHome.png"
                alt="Aperçu du projet Home Service"
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
                    <li>SqlLite</li>
                </ul>
            </div>
        </section>
    );
}
