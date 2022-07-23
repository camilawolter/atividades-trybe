import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      coment: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, coment, terms } = this.state;

    return (
      <div>

        <h1>Formulário com React</h1>

        <form className='form'>
          <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor='name'>
              Nome:
              <input id='name' name='name' type='text' onChange={this.handleChange} value={name} />
            </label>

            <label htmlFor='email'>
              Email:
              <input id='email' name='email' type='text' onChange={this.handleChange} value={email} />
            </label>

            <label htmlFor='age'>
              Idade:
              <select id='age' name='age' defaultValue='' onChange={this.handleChange} value={age}>
                <option value=''>Selecione</option>
                <option value='adult'>Maior que 18</option>
                <option value='underage'>Menor que 18</option>
              </select>
            </label>

          </fieldset>

          <fieldset>
            <legend>Texto e Arquivos</legend>

            <label htmlFor="coment">
              Comentário:
              <textarea id="coment" name="coment" onChange={this.handleChange} value={coment} />
            </label>

            <input type='file' />

          </fieldset>

          <label htmlFor='terms'>
            Concordo com os termos
            <input id='terms' type='checkbox' name='terms' onChange={this.handleChange} value={terms} />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;
