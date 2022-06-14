import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { logout } from '../../store/modules/auth/actions';
import AvatarInput from './AvatarInput';
import { Container } from './styles';
import Header from '../../components/Header';

function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(logout());
  }

  return (
    <>
      <Header />
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />
          <Input name="name" type="text" placeholder="Nome completo" />
          <Input
            name="email"
            type="email"
            placeholder="Seu endereço de email"
          />

          <hr />

          <Input
            name="oldPassword"
            type="password"
            placeholder="Sua senha atual"
          />
          <Input name="password" type="password" placeholder="Nova senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirmação de senha"
          />

          <button type="submit">Atualizar perfil</button>
        </Form>
        <button type="button" onClick={handleSignOut}>
          Sair do sistema
        </button>
      </Container>
    </>
  );
}

export default Profile;
