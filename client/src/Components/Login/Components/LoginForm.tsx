import React, { FormEvent } from 'react';
import { Form, Formik, Field } from 'formik';
import { MyTextField } from '../../Common/TextField/index';
import styled from '@material-ui/styles/styled';
import MuiGrid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';
import { HomeIcon } from '../../Common/Icons/HomeIcon';
import Styles from '../Styles';
import { useIntl } from 'react-intl';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import { Typography, Paper, Button, CircularProgress } from '@material-ui/core';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Values {
  password: string;
  emailAddress: string;
}

interface Props {
  onSubmit: (values: Values) => void;
  isLoading: Boolean;
  errorsProps?: any;
}

const LoginForm: React.FC<Props> = ({ onSubmit, isLoading, errorsProps }) => {
  const classes = Styles();
  const intl = useIntl();

  return (
    <Grid container py={10} className={classes.loginRoot}>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" align="center">
          {intl.formatMessage({ id: 'sign_in_to_pet_link' })}
        </Typography>
        <Paper className={classes.paperPadding}>
          <Formik
            initialValues={{ password: '', emailAddress: '' }}
            onSubmit={(values) => onSubmit(values)}
          >
            <Form>
              <Grid pb={1}>
                <Field
                  component={MyTextField}
                  name="emailAddress"
                  label="Email Address"
                  placeholder="Email Address"
                  size="small"
                  error={errorsProps.email}
                  onBlur={(e: FormEvent) => {
                    console.log(e.target);
                  }}
                />
              </Grid>
              <Grid pb={1}>
                <Field
                  component={MyTextField}
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  error={errorsProps.password}
                />
              </Grid>
              <Grid pb={1}>
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
                    intl.formatMessage({ id: 'login' })
                  )}
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Paper>
        <Grid mt={4}>
          <Paper className={classes.paperPadding}>
            <Typography variant="body1">
              {`${intl.formatMessage({ id: 'new_to_pet_link' })} `}
              <Link to="/registration" className={classes.linkTextDecoration}>
                {intl.formatMessage({ id: 'create_an_account' })}
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
