import React, { Component } from 'react';

// 1. Interface pour typer les props (ici vide, car on ne reçoit rien)
interface CounterProps {}

// 2. Interface pour typer le state
interface CounterState {
  count: number; // l’état contient une seule propriété : count
}

// 3. On précise les types en héritant de Component<Props, State>
class Counter extends Component<CounterProps, CounterState> {
  // 4. Définition initiale du state avec typage strict
  state: CounterState = {
    count: 0,
  };

  // 5. Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // 6. Méthode render qui retourne du JSX
  render() {
    return (
      <div>
        <p>Compteur : {this.state.count}</p>
        {/* 7. L’événement onClick est automatiquement typé */}
        <button onClick={this.increment}>Incrémenter</button>
      </div>
    );
  }
}

// 8. Export du composant
export default Counter;
