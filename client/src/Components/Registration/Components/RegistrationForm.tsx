import React from 'react';
import styled from '@material-ui/styles/styled';
import MuiGrid from '@material-ui/core/Grid';
import Styles from '../Styles';
import { useHistory, Link } from 'react-router-dom';
import { MyTextField } from '../../Common/TextField/index';
import { useIntl } from 'react-intl';
import { Form, Formik, Field } from 'formik';
import { Typography, Paper, Button, CircularProgress } from '@material-ui/core';
import { HomeIcon } from '../../Common/Icons/HomeIcon';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Values {
  userName: string;
  password: string;
  emailAddress: string;
}

interface Props {
  onSubmit: (values: Values) => void;
  registrationErrorProps?: any;
  isLoading: Boolean;
}

const RegistrationForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  registrationErrorProps,
}) => {
  const classes = Styles();
  const intl = useIntl();
  return (
    <Grid container py={5} className={classes.registrationRoot}>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" align="center">
          {intl.formatMessage({ id: 'create_your_account' })}
        </Typography>
        <Paper className={classes.paperPadding}>
          <Formik
            initialValues={{ password: '', emailAddress: '', userName: '' }}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            <Form>
              <Grid pb={2}>
                <Field
                  component={MyTextField}
                  name="userName"
                  label={intl.formatMessage({ id: 'username' })}
                  placeholder={intl.formatMessage({ id: 'username' })}
                  size="small"
                  error={registrationErrorProps.userName}
                />
              </Grid>
              <Grid pb={2}>
                <Field
                  component={MyTextField}
                  name="emailAddress"
                  label={intl.formatMessage({ id: 'email_address' })}
                  placeholder={intl.formatMessage({ id: 'email_address' })}
                  size="small"
                  error={registrationErrorProps.email}
                />
              </Grid>
              <Grid pb={3}>
                <Field
                  component={MyTextField}
                  name="password"
                  label={intl.formatMessage({ id: 'password' })}
                  placeholder={intl.formatMessage({ id: 'password' })}
                  type="password"
                  error={registrationErrorProps.password}
                />
                <Grid pt={1}>
                  <Typography variant="body2">
                    {intl.formatMessage({ id: 'password_tips' })}
                  </Typography>
                </Grid>
              </Grid>
              <Grid pb={3}>
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isLoading ? (
                    <CircularProgress className={classes.circularBgColor} />
                  ) : (
                    intl.formatMessage({ id: 'sign_up_for_pet_link' })
                  )}
                </Button>
              </Grid>
              <Grid pb={3}>
                <Typography
                  variant="body2"
                  className={classes.registrationTermsStyle}
                >
                  {`${intl.formatMessage({
                    id: 'sign_up_terms',
                  })}
                  ${intl.formatMessage({
                    id: 'terms_and_condtion',
                  })}.
                  ${intl.formatMessage({
                    id: 'registration_terms',
                  })}`}
                </Typography>
              </Grid>
            </Form>
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
