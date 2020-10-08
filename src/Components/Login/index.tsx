import React from 'react';
import { Form, Formik, Field } from 'formik';
import Paper from '@material-ui/core/Paper';
import { MyTextField } from '../Common/TextField/index';
import styled from '@material-ui/styles/styled';
import MuiGrid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import Styles from './Styles';
import { useIntl } from 'react-intl';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import { Typography } from '@material-ui/core';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Values {
  password: string;
  emailAddress: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = Styles();
  const intl = useIntl();
  const history = useHistory();
  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <Grid container mt={5} className={classes.loginRoot}>
      <HomeIcon
        onClick={() => history.push('/')}
        className={classes.svgIcon}
        fontSize="large"
      />

      <Grid item xs={12} md={12}>
        <Typography variant="h6" align="center">
          {intl.formatMessage({ id: 'sign_in_to_pet_link' })}
        </Typography>
        <Paper className={classes.paperPadding}>
          <Formik
            initialValues={{ password: '', emailAddress: '' }}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <Grid pb={1}>
                  <Field
                    component={MyTextField}
                    name="emailAddress"
                    label="Email Address"
                    placeholder="Email Address"
                    size="small"
                  />
                </Grid>
                <Grid pb={1}>
                  <Field
                    component={MyTextField}
                    name="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
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
                    {intl.formatMessage({ id: 'login' })}
                  </Button>
                </Grid>
              </Form>
            )}
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
