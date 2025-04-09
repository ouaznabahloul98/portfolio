import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '@/styles/about.module.css';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub,
    FaWindows, FaLinux, FaApple, FaFigma, FaCode
} from 'react-icons/fa';
import {
    SiNextdotjs, SiMongodb, SiCanva, SiPostman, SiMysql
} from 'react-icons/si';

export default function About() {
    const router = useRouter();
    const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        if (!currentUser) {
            router.push('/login'); // redirection si non connecté
        }
    }, [currentUser]);

    if (!currentUser) return null;
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>À propos de moi</h1>
            <p className={styles.text}>
                Je suis étudiante en fin de parcours en programmation informatique au Collège La Cité, avec une véritable passion
                pour le développement web et le design. Je m'intéresse particulièrement aux technologies frontend, là où créativité
                et logique se rencontrent pour donner vie à des interfaces intuitives, esthétiques et adaptatives.
            </p>

            <p className={styles.text}>
                J'aime travailler avec des outils comme Next.js, React et Tailwind CSS, qui me permettent de créer des sites web
                épurés, dynamiques et performants.
            </p>
            <p className={styles.text}>
                Au-delà du frontend, je m'investis aussi dans la gestion des bases de données, en structurant et manipulant les
                données pour soutenir des applications fonctionnelles et évolutives. Que ce soit pour concevoir une interface
                utilisateur agréable ou assurer une logique backend solide, je suis toujours motivée à apprendre, à m'améliorer et
                à proposer des solutions concrètes.
            </p>
            <p className={styles.text}>
                Ce portfolio est le reflet de mes projets, de mes compétences acquises et de ma passion pour l'évolution continue
                dans le monde du numérique. Merci de votre visite !
            </p>

            <h2 className={styles.subtitle}>Compétences techniques</h2>

            <div className={styles.skillsSection}>
                <div>
                    <h3>Langages & Frameworks</h3>
                    <div className={styles.icons}>
                        <FaJs title="JavaScript" />
                        <FaHtml5 title="HTML5" />
                        <FaCss3Alt title="CSS3" />
                        <SiMysql title="MySQL" />
                        <SiMongodb title="MongoDB" />
                        <FaCode title="C#" />
                        <FaReact title="React.js" />
                        <SiNextdotjs title="Next.js" />
                        <FaNodeJs title="Node.js" />
                    </div>
                </div>

                <div>
                    <h3>Design</h3>
                    <div className={styles.icons}>
                        <FaFigma title="Figma" />
                        <SiCanva title="Canva" />
                    </div>
                </div>

                <div>
                    <h3>Outils</h3>
                    <div className={styles.icons}>
                        <FaGithub title="GitHub" />
                        {/*<SiVisualstudiocode title="VS Code" />*/}
                        <SiPostman title="Postman" />
                    </div>
                </div>

                <div>
                    <h3>Systèmes d'exploitation</h3>
                    <div className={styles.icons}>
                        <FaWindows title="Windows" />
                        <FaLinux title="Linux" />
                        <FaApple title="macOS" />
                    </div>
                </div>
            </div>
        </section>
    );
}
