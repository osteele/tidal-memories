import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

const debug = true;

export default function setupStore({ apiClient, audioBaseUrl, paused }) {
    const initialState = {
        apiClient,
        audioBaseUrl,
        heartbeat: new Date(),
        paused
    };

    const middleware =
        debug && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
                  applyMiddleware(
                      thunkMiddleware, // lets us dispatch() functions
                      routerMiddleware(history)
                  )
              )
            : applyMiddleware(
                  thunkMiddleware, // lets us dispatch() functions
                  routerMiddleware(history)
              );

    return createStore(
        combineReducers({ ...reducers, router: routerReducer }),
        initialState,
        middleware
    );
}
