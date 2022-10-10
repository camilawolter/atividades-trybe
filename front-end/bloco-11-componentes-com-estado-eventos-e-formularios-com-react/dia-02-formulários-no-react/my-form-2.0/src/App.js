import React from 'react';
import Form from './components/Form';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  countryState: '',
  addresType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  render() {
    return (
      <main>
        <Form 
          changeHandler={this.changeHandler}
        />
      </main>
    );
  }
}


export default App;
