import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './Components/Common/Spinner';
import LandingPage from './Components/LandingPage';
import RegistrationForm from './Components/Registration/';
import LoginForm from './Components/Login/';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/Themes';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Suspense fallback={<Loader isLoading={isLoading} />}>
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/registration" exact>
                  <RegistrationForm
                    onSubmit={({ emailAddress, password }) => {}}
                  />
                </Route>
                <Route path="/login" component={LoginForm} exact />
              </Switch>
            </Suspense>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
