import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Meus teste de teste', () => {
  test('Verifica se existe o campo email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
  })

  test('Verifica se o input Email é do tipo "email"', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail.type).toBe('email');
  })

  test('Verifica se existe um botão Enviar', () =>{
    render(<App />);
    // const btn = screen.getByRole('button'); // getByRole, verifica se existe um elemento
    const btn = screen.getAllByRole('button'); // getAllByRole, Verifica se existe mais de um elemento
    expect(btn.length).toBe(2);
  })

  test('Verifica se existe um botão Voltar', () =>{
    render(<App />);
      // const btn = screen.getByRole('button'); // getByRole, verifica se existe um elemento
      const btn = screen.getAllByRole('button'); // getAllByRole, Verifica se existe mais de um elemento
      expect(btn.length).toBe(2);
    })

  test('Verifica se o valor do btn com id-send é "Enviar"', () => {
      render(<App />)
      const btn = screen.getByTestId('id-send'); // recupera o elemento button com id "id-send"
      expect(btn).toBeInTheDocument(); // Verificar se existe o elemento no componente (essa linha não é obrigatoria)
      expect(btn.type).toBe('button'); // Verifica se o elemento é do tipo "button"
      expect(btn).toHaveValue('Enviar'); // Verifica se o valor do button com id "id-send" é "Enviar"
    })

  test('Verifica se o valor do btn com id="btn-back" é voltar', () => {
    render(<App />)
    const btn = screen.getByTestId('id-back');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Voltar');
  })

})

describe('verificando a funcionalidade de evento dos botões', () => {
  test('Testa se os botões e o campo email estão funcionando', () => {
    const { getByTestId, getByLabelText } = render(<App />)

    const EMAIL_USER ='email@email.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Email');

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER }});
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Email: ${EMAIL_USER}`);
  })
})
