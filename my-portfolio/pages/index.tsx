import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Je suis développeur web et voici mes projets.</p>
        <Image 
          src="/images/profile.jpg" 
          alt="Profil" 
          width={200} 
          height={200} 
        />
      </main>
    </div>
  );
}
