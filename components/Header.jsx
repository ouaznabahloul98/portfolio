import styles from '@/styles/Header.module.css';
import MenuNavigation from './MenuNavigation';

export default function Header() {
    return (
    <div className={styles.header}>
        <h1>OUAZNA BAHLOUL</h1>
        <MenuNavigation />
    </div>
    
)
}