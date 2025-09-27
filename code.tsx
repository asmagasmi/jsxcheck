// Import de React
import React from 'react';

// 1. On définit une interface pour typer les props
interface GreetingProps {
  name: string; // le nom doit toujours être une chaîne de caractères
}

// 2. On utilise React.FC pour créer un composant fonctionnel typé
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

// 3. Exportation classique
export default Greeting;
