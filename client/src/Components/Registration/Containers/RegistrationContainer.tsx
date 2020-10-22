import React, { useState, useEffect } from 'react';
import RegistrationForm from '../Components/RegistrationForm';
import { registerUser } from '../../../API/Login/loginAuth';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { IRootState, Dispatch } from '../../../Store/GlobalStore';
import { useHistory } from 'react-router-dom';

interface Values {
  userName: string;
  emailAddress: string;
  password: string;
}

interface Props {
  registrationErrors?: any;
  setRegistrationErrorsStore?: any;
}

const Registration: React.FC<Props> = ({
  registrationErrors,
  setRegistrationErrorsStore,
}) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [registrationError, setRegistrationError] = useState<Object>({});
  const history = useHistory();
  const onSubmit = (values: Values) => {
    setIsLoading(true);
    const userData = {
      userName: values.userName,
      emailAddress: values.emailAddress,
      password: values.password,
    };

    registerUser(userData, history);
  };

  useEffect(() => {
    setRegistrationErrorsStore({ userName: '', email: '', password: '' });
  }, []);

  useEffect(() => {
    setRegistrationError(registrationErrors);
    setIsLoading(isEmpty(registrationErrors));
  }, [registrationErrors]);
  return (
    <RegistrationForm
      onSubmit={({ userName, emailAddress, password }) => {
        onSubmit({ userName, emailAddress, password });
      }}
      registrationErrorProps={registrationError}
      isLoading={isLoading}
    />
  );
};

const mapProps = (state: IRootState) => {
  return {
    registrationErrors: state.loginStore.registrationErrors,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  setRegistrationErrorsStore: dispatch.loginStore.setRegistrationErrors,
});

export default connect(mapProps, mapDispatch as any)(Registration);
