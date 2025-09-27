import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectProps) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;

