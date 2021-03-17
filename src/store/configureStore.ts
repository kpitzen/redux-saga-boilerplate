import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { RootState } from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState: RootState) {
  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant()))
  )

  sagaMiddleware.run(rootSaga);
  return store;
}
