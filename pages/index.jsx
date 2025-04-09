import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>BIENVENUE SUR MON PORTFOLIO</h1>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            Je m’appelle Ouazna, étudiante en fin de parcours en programmation informatique au Collège La Cité.
            Passionnée par le développement web, j’aime concevoir des interfaces modernes, simples et conviviales.
          </p>
          <p className={styles.subtitle}>
            Découvrez mes projets, mes compétences, et n'hésitez pas à me contacter !
          </p>
          <Image
                src="/maphoto.jpg"
                alt="ma photo"
                width={250}
                height={250}
                className={styles.maPhoto}
            />
          
        </div>
      </div>
      <Footer />
    </>
  );
}
