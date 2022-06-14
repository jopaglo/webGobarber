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
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 45px;
    margin-bottom: 30px;
  }

  a {
    margin-top: 30px;
    font-size: 35px;
    color: #fff;
    background: #222;
    padding: 20px;
    border-radius: 5px;
    opacity: 0.8;
    transition: all ease 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;
