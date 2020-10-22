import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './Components/Common/Spinner';
import LandingPage from './Components/LandingPage';
import RegistrationSuccess from './Components/Common/SuccessPage/RegistrationSuccess';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/Themes';
import { Provider } from 'react-redux';
import store from './Store/GlobalStore';
import PrivateRoute from './Components/Common/PrivateRoute';
import setAuthToken from './Utils/setAuthToken';
import { LogoutUser } from './API/Login/loginAuth';
import jwt_decode from 'jwt-decode';
import { get } from 'lodash';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch.loginStore.setCurrentUser(decoded);

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (get(decoded, 'exp', '') < currentTime) {
      // Logout the user
      store.dispatch(LogoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Grid container>
            <Grid item md={12} xs={12}>
              <Suspense fallback={<Loader isLoading={isLoading} />}>
                <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route
                    path="/registration-success"
                    exact
                    component={RegistrationSuccess}
                  />
                  <Route
                    path="/registration"
                    component={Registration}
                    exact
                  ></Route>
                  <Route path="/login" component={Login} exact />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
              </Suspense>
            </Grid>
          </Grid>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
