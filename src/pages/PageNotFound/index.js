import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function PageNotFound() {
  return (
    <Container>
      <Content>
        <h1>A página que você deseja acessar não existe ou foi excluída!</h1>
        <Link to="/">Clique aqui para voltar para o início</Link>
      </Content>
    </Container>
  );
}
