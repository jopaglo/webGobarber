import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      /* o after é pra eu adicionar antes da tag Badge-button fechar*/
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 10px;
        height: 10px;
        background: #ff892e;
        content: ''; /* é obrigatorio */
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 300px;
  left: calc(50% - 150px);
  top: calc(100% + 50px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  transition: all ease 0.2s;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;

    /* fazer um triangulo so com css */
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6); /* onde vai ficar a base da seta */
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 300px;
  padding: 5px 15px;
`;

export const Notification = styled.li`
  color: #fff;

  /* para dar um espaço na próximo div e atribuir uma divisoria*/
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #7159c1;
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* marcar como nao lida */
  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
