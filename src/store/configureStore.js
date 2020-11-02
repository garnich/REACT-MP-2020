import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

export default (initialState) => {
    const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

    return store;
};
