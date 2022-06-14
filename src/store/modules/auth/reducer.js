import produce from 'immer';
import { toast } from 'react-toastify';

// definir o valor inicial do estado
const INITIAL_STATE = {
  token: null,
  loged: false,
  loading: false,
};

// eu armazenei tudo, todas as minhas variaveis dentro da palavra payload
function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true; // eu crio esse apenas pra deixar rodando o loading
      });
    case '@auth/LOGIN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.loged = true;
        draft.loading = false;
        toast.success('Autenticação de usuário realizada com sucesso!');
      });
    /* os dados do usuário eu vou armazenar em outro reducer (dados pessoais e avatar), aqui eu vou armazenar
    apenas a informação se ele está logado ou não e controlar o loading */
    case '@auth/LOGIN_AND_REGISTER_FAILURE':
      return produce(state, (draft) => {
        draft.loged = true;
        draft.loading = false;
        toast.success('Combinação de email/senha inválidos!');
      });

    case '@auth/LOGOUT':
      return produce(state, (draft) => {
        draft.loged = false;
        draft.token = null;
        toast.info('Logout de usuário realizado com sucesso!');
      });

    default:
      return state; // retorna o estado sem nenhuma alteracao
  }
}

export default auth;
