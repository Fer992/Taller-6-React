import { createStore } from 'redux';
import counterReducer from '../src/Reducer';

const store = createStore(counterReducer);

export default store;