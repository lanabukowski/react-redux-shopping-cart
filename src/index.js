import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import ErrorBoundry from './components/errorBoundry/errorBoundry';
import Service from './servise';
import ServiceContext from './components/serviceContext/serviceContext';

const service = new Service();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <ServiceContext.Provider value={service}>
          <Router>
            <App/>
          </Router>
        </ServiceContext.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);