import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { loginSuccess, loginAndRegisterFailure } from './actions';
import history from '../../../services/history';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('O usuário não é um prestador de serviços');
      return;
    }

    /* usar o token para todas as chamadas feitas a api, já vou setar
    eu preciso setar também se ele der um F5 na tela, posso fazer isso
    no takeLatest do meu saga lá embaixo */
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // se deu tudo certo
    yield put(loginSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticacao, verifique seus dados!');
    yield put(loginAndRegisterFailure());
  }
}

export function* register({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    }); // rota para criar novo usuário

    history.push('/');
    toast.success('Cadastro realizado com sucesso!');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(loginAndRegisterFailure());
  }
}

// o token para eu setar quando ele der um F5 na página
export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logout() {
  history.push('/');
}

// o all é pra eu ouvir todas as actions e suas respectivas novas chamadas
export default all([
  // para ele carregar o token eu posso fazer aqui no saga
  takeLatest('persist/REHYDRATE', setToken), // setando para guardar token com F5
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/REGISTER_REQUEST', register),
  takeLatest('@auth/LOGOUT', logout),
]);
