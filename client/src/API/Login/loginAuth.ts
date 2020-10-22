import axios from 'axios';
import setAuthToken from '../../Utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { dispatch } from '../../Store/GlobalStore';

interface Credentials {
  emailAddress: string;
  password: string;
}

interface Registration {
  userName: string;
  emailAddress: string;
  password: string;
}

export const loginUser = (userData: Credentials) => {
  axios
    .post('/api/users/sign-in', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // // Set current user
      dispatch.loginStore.setCurrentUser(decoded);
    })
    .catch((err) => {
      dispatch.loginStore.setErrors(err.response.data);
    });
};

export const registerUser = (userData: Registration, history: any) => {
  axios
    .post('/api/users/register', userData)
    .then(() => {
      history.push('/registration-success');
    })
    .catch((err) => {
      dispatch.loginStore.setRegistrationErrors(err.response.data);
    });
};

export const LogoutUser = () => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header token for future request
  setAuthToken(false);
  // Set current user to empty object
  dispatch.loginStore.setCurrentUser({});
};
