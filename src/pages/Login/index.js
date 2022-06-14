import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('O preenchimento do campo email é obrigatório.')
    .email('O formato de e-mail não é valido'),
  password: Yup.string()
    .required('O preenchimento do campo senha é obrigatória!')
    .min(6, 'A senha precisa ter mínimo de 6 caracteres!')
    .max(12, 'A senha suporta máximo de 12 caracteres!'),
});

function Login() {
  // para eu poder disparar uma action que vai ser ouvida
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form schema={schema} onSubmit={handleSubmit}>
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

          <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
          <Link to="/register">Criar uma conta gratuita.</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
