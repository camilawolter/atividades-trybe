import React from "react";

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends React.Component {
  render () {

    const { changeHandler } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome:
          <input type="name" name="name" maxLength="40" required onChange={changeHandler} />
        </div>
        <div className="container">
          Email:
          <input type="email" name="email" maxLength="50" required onChange={changeHandler} />
        </div>
        <div className="container">
          CPF:
          <input type="text" name="cpf" maxLength="11" required onChange={changeHandler} />
        </div>
        <div className="container">
          Endereço:
          <input type="text" name="address" maxLength="200" required onChange={changeHandler} />
        </div>
        <div className="container">
          Cidade:
          <input type="text" name="city" maxLength="28" required onChange={changeHandler} />
        </div>
        <div className="container">
          Estado:
          <select name="countryState" required onChange={changeHandler} defaultValue="">
            <option value="">Selecione</option>
            {
              states.map((value, key) => (
                <option key={ key }>{ value }</option>
              ))
            }
          </select>
        </div>
        <div className="container">
            <label htmlFor="house">
              <input type="radio" name="addressType" id="house" value="house" onChange={changeHandler} required />
              Casa
            </label>
            <label htmlFor="apart">
              <input type="radio" name="addressType" id="apart" value="apartment" onChange={changeHandler} required />
              Apartamento
            </label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalForm;
