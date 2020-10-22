import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import LoginForm from '../Components/LoginForm';
import { loginUser } from '../../../API/Login/loginAuth';
import { connect } from 'react-redux';
import { IRootState, Dispatch } from '../../../Store/GlobalStore';

interface Values {
  emailAddress: string;
  password: string;
}

interface Props {
  errors?: any;
  setLoginErrors?: any;
  isAuthenticated: Boolean;
  history?: any;
}

const Login: React.FC<Props> = ({
  errors,
  setLoginErrors,
  isAuthenticated,
  history,
}) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [loginError, setLoginError] = useState<Object>({});
  const onSubmit = (values: Values) => {
    setIsLoading(true);
    const userData = {
      emailAddress: values.emailAddress,
      password: values.password,
    };

    loginUser(userData);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setLoginErrors({ email: '', password: '' });
  }, []);

  useEffect(() => {
    setLoginError(errors);
    setIsLoading(isEmpty(errors));
  }, [errors]);

  return (
    <LoginForm
      isLoading={isLoading}
      errorsProps={loginError}
      onSubmit={({ emailAddress, password }) =>
        onSubmit({ emailAddress, password })
      }
    />
  );
};

const mapProps = (state: IRootState) => {
  return {
    errors: state.loginStore.errors,
    isAuthenticated: state.loginStore.isAuthenticated,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  setLoginErrors: dispatch.loginStore.setErrors,
});

export default connect(mapProps, mapDispatch as any)(Login);
