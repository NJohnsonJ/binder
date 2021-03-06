import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import routes from './routes';
import Header from "./components/Header";
import theme from './style/theme';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <Router>
          <Header />
          <Switch>

            { Object.values(routes).map(({ path, Component }) => (
              <Route path={ path }>
                <Component />
              </Route>
            )) }

          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
