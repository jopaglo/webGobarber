import storage from 'redux-persist/lib/storage'; // estrategia de storage para web

import { persistReducer } from 'redux-persist';

// ela vai receber todos os reducers como parametro
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber', // é uma chave a ser usada pela aplicacao
      storage, // storage como parametro
      whitelist: ['auth', 'user'],
      // nome dos redurces que eu preciso armazenar informacao
    },
    reducers
  );

  return persistedReducer;
};
