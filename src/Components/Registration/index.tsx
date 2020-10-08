import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Form, Formik } from 'formik';

interface Values {
  userName: string;
  password: string;
  emailAddress: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ userName: '', password: '', emailAddress: '' }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
