import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      saveEmail:'',
    };
  }

  changeEmail(value) {
    this.setState({ email: value});
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>
          Teste React - RTL
          </h1>
        <div>
        <label htmlFor="id-email">
          Email
        </label>
        <input id="id-email"
          value={ email }
          type="email"
          onChange={(e) => this.changeEmail(e.target.value)}
        />
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <h2 data-testid="id-email-user">{`Email: ${saveEmail}`}</h2>
        <input id="btn-back" type="button" data-testid="id-back" value="Voltar" />
      </div>
        </header>
      </div>
    );
  }
}

export default App;
