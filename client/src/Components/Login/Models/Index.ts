import {
  Errors,
  RegistrationErrors,
  LoginSuccess,
  Profile,
} from '../Types/LoginTypes';
import { createModel } from '@rematch/core';
import { isEmpty } from 'lodash';

interface State {
  errors: Errors;
  registrationErrors: RegistrationErrors;
}

interface RegistrationState {
  registrationErrors: RegistrationErrors;
}

interface LoginAuthentication {
  user: string;
}

interface UserProfileState {
  profile: Profile;
}

const initialState = {
  errors: {
    email: '',
    password: '',
  },
  registrationErrors: {
    userName: '',
    email: '',
    password: '',
  },
  isAuthenticated: false,
  user: {},
  profile: {},
};

export const loginStore = createModel({
  state: initialState,
  reducers: {
    user: (state: LoginAuthentication) => state,
    setCurrentUser: (state: LoginAuthentication, payload: LoginSuccess) => ({
      ...state,
      user: payload,
      isAuthenticated: !isEmpty(payload),
    }),
    getCurrentProfile: (state: UserProfileState, payload: Profile) => ({
      ...state,
      profile: payload,
    }),
    errors: (state: State) => state,
    registrationErrors: (state: RegistrationState) => state,
    setErrors: (state: State, payload: Errors) => ({
      ...state,
      errors: payload,
    }),
    setRegistrationErrors: (
      state: RegistrationState,
      payload: RegistrationErrors
    ) => ({
      ...state,
      registrationErrors: payload,
    }),
  },
});
