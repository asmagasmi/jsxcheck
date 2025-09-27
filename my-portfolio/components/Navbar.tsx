import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/projects">Projets</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
