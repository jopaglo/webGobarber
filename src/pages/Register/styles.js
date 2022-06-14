import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background-color: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 5px;
      height: 50px;
      color: #fff;
      padding: 0 15px;
      margin: 0 0 10px;

      & + Input {
        margin-top: 10px;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    /* esse é o span que vai dar a mensagem de erro */
    span {
      color: #fb6f91;
      margin: 5px;
      font-size: 17px;
    }

    button {
      height: 50px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: all ease 0.2s;
      opacity: 0.8;
      margin: 10px 0px;

      &:hover {
        opacity: 1;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: all ease 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
