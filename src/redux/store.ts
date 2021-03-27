import { configureStore, getDefaultMiddleware, applyMiddleware, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {RootState} from '../redux/rootReducer';
import rootSaga from '../redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// export const configureAppStore = (preloadedState?: RootState) => configureStore({
//   reducer: rootReducer,
//   middleware: [
//     ...getDefaultMiddleware({
//       immutableCheck: false,
//       serializableCheck: false,
//     }),
//     sagaMiddleware,
//   ],
//   preloadedState
// });

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);
