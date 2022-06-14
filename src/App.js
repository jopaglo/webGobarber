import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from './store';
// precisa vir depois das configuracoes do reactotron
/* eu preciso colocar esse store entre chaves pq agora ele não é default, existem
outras variáveis que estao sendo exportadas */

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
  /*
  Provider: vai compartilhar os elementos do redux - user, auth, cart

  Persistgate só vai renderizar a tela depois de pegar as informacoes no storage
  e ele vai receber uma variavel persistor que estamos exportando la no storage

  O persist/Heydrate que vai lá buscar as informacoes pra ver se tem algo no storage
  */
}

export default App;
