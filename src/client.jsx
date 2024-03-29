import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    // Do something
  });
}
