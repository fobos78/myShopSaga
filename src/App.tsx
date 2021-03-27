
import { GlobalStyle, primaryTheme } from '../src/assets/styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { store } from '../src/redux/store';
import Route  from './companents/Route';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={primaryTheme}>
          <GlobalStyle />
          <Route />
      </ThemeProvider>
  </Provider>
  );
}

export default App;

