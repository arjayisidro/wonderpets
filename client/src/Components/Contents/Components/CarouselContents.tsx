import React from 'react';
import styled from '@material-ui/styles/styled';
import { Form, Formik, Field } from 'formik';
import MuiGrid from '@material-ui/core/Grid';
import { Typography, Paper, Button, CircularProgress } from '@material-ui/core';
import { useIntl } from 'react-intl';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import Styles from '../Styles';
import { MyTextField } from '../../Common/TextField';
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

export const CarouselContens: React.FC<Props> = ({
  onSubmit,
  registrationErrorProps,
  isLoading,
}) => {
  const classes = Styles();
  const intl = useIntl();
  return (
    <Grid px={4} container className={classes.carouselStyles}>
      <Grid
        item
        md={7}
        sm={2}
        py={8}
        px={5}
        className={classes.carouselLeftContentFontColor}
      >
        <Typography variant="h3">
          {intl.formatMessage({ id: 'pet_link' })}
        </Typography>
        <Grid pt={3}>
          <Typography component="p" variant="body1">
            {intl.formatMessage({ id: 'welcome_to_petlink' })}
          </Typography>
        </Grid>
        <Grid pt={1}>
          <Typography component="p" variant="body1">
            {intl.formatMessage({ id: 'million_of_pet_owners' })}
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={4} sm={12} py={8} px={5}>
        <Paper className={classes.carouselPaddingTop}>
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
                  className={classes.registrationButton}
                >
                  {isLoading ? (
                    <CircularProgress
                      className={classes.carouselLeftContentFontColor}
                    />
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
