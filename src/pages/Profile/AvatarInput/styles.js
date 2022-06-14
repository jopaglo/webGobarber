import styled from 'styled-components';

export const Container = styled.div`
  align-self: center; /* para o preview da imagem ficar centralizado */
  margin-bottom: 30px;

  label {
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.8;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }

    input {
      display: none;
    }
  }
`;
