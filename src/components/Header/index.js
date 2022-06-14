import React from 'react';
import { useSelector } from 'react-redux'; // usado para pegar informacoes do redux
import { Link } from 'react-router-dom';

import Notifications from '../Notifications/index';

import logo from '../../assets/header.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={profile.avatar.url} alt="Joao Paulo" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
