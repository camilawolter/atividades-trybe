import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliquesUm: 0,
      numeroDeCliquesDois: 0,
      numeroDeCliquesTres:0
    }
    this.eventClickOne = this.eventClickOne.bind(this)
    this.eventClickTwo = this.eventClickTwo.bind(this)
    this.eventClickThree = this.eventClickThree.bind(this)
  }

  eventClickOne() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesUm: estadoAnterior.numeroDeCliquesUm + 1
    }))
    console.log(`clicou no botão um! ${this.buttonColor(this.state.numeroDeCliquesUm)}`);
  }
  
  eventClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesDois: estadoAnterior.numeroDeCliquesDois + 1
    }))
    console.log(`clicou no botão dois! ${this.buttonColor(this.state.numeroDeCliquesDois)}`);
  }
  
  eventClickThree() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesTres: estadoAnterior.numeroDeCliquesTres + 1
    }))
    console.log(`clicou no botão três! ${this.buttonColor(this.state.numeroDeCliquesTres)}`);
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'gray';
  }


  render() {
    const { numeroDeCliquesUm, numeroDeCliquesDois, numeroDeCliquesTres } = this.state;
    return (
      <div>
        <button onClick={this.eventClickOne} 
        style={{backgroundColor: this.buttonColor(numeroDeCliquesUm)}}>Botão Um {numeroDeCliquesUm}</button>
        <button onClick={this.eventClickTwo} 
        style={{backgroundColor: this.buttonColor(numeroDeCliquesDois)}}>Botão Dois {numeroDeCliquesDois}</button>
        <button onClick={this.eventClickThree} 
        style={{backgroundColor: this.buttonColor(numeroDeCliquesTres)}}>Botão Três {numeroDeCliquesTres}</button>
      </div>
      
    );
  }
}

export default App;
