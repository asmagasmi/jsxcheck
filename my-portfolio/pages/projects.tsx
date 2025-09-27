import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h1>Mes Projets</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <ProjectCard 
          title="Projet 1" 
          description="Description du projet 1" 
          image="/images/project1.jpg" 
        />
        <ProjectCard 
          title="Projet 2" 
          description="Description du projet 2" 
          image="/images/project2.jpg" 
        />
      </div>
    </div>
  );
}
