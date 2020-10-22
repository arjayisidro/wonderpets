import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { CarouselContens } from '../Components/CarouselContents';
import { CategoryContents } from '../Components/CategoryContents';
import { CardContents } from '../Components/CardContents';
import { registerUser } from '../../../API/Login/loginAuth';
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
const ContentsContainers: React.FC<Props> = ({
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
    <React.Fragment>
      <CarouselContens
        onSubmit={({ userName, emailAddress, password }) => {
          onSubmit({ userName, emailAddress, password });
        }}
        registrationErrorProps={registrationError}
        isLoading={isLoading}
      />
      <CategoryContents />
    </React.Fragment>
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

export default connect(mapProps, mapDispatch as any)(ContentsContainers);
