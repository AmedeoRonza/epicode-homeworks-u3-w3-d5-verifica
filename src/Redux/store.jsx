// src/Redux/store.jsx
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Assicurati di aver corretto l'importazione di thunk
import rootReducer from './reducers'; // Sostituisci con il tuo percorso effettivo per il rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

