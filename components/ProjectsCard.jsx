import styles from '@/styles/projects.module.css';
import { GiClick } from 'react-icons/gi';
import Image from 'next/image';

export default function ProjectsCard({ img, name }) {
    return (
        <div className={styles.cardP}>
            <div className={styles.imgWrapper}>
                <Image
                    src={img}
                    alt={`Preview of ${name}`}
                    className={styles.imgP}
                    width={400}
                    height={250}
                    objectFit="cover"
                />
            </div>
            <p className={styles.pP}>
                {name} <GiClick className={styles.iconP} />
            </p>
        </div>
    );
}
