/* as informacoes do usuario logado eu preciso armazenar no redux para que seja
compartilhado com toda a minha aplicacao, em qualquer pagina que ele esteja

instalar o redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { registerRequest } from '../../store/modules/auth/actions';
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O preenchimento do campo nome é obrigatório')
    .min(3, 'O campo nome precisa ter no mínimo 3 caracteres!')
    .max(32, 'O caampo nome suporta no máximo 32 caracteres!'),

  email: Yup.string()
    .required('O preenchimento do campo email é obrigatório.')
    .email('O formato de e-mail não é valido'),

  password: Yup.string()
    .required('O preenchimento do campo senha é obrigatório!')
    .min(6, 'A senha precisa mínimo de 6 caracteres')
    .max(12, 'A senha permite máximo de 12 caracteres'),
});

function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(registerRequest(name, email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome completo"
            autoComplete={false}
            autoCorrect={false}
            autoCapitalize={false}
          />
          <Input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            autoComplete={false}
            autoCorrect={false}
            autoCapitalize={false}
          />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete={false}
            autoCorrect={false}
            autoCapitalize={false}
          />
          <button type="submit">Criar uma conta</button>
          <Link to="/">Já tenho uma conta.</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default Register;
