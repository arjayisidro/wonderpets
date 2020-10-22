import React from 'react';
import styled from '@material-ui/styles/styled';
import MuiGrid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Styles from '../../Footer/Styles';
import { useIntl } from 'react-intl';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import { Typography, Link } from '@material-ui/core';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props {}

const RegistrationSuccess: React.FC<Props> = () => {
  const classes = Styles();
  const intl = useIntl();
  const history = useHistory();

  return (
    <Grid container py={5}>
      <Grid item md={12} sm={12} mt={7}>
        <Typography align="center" variant="h3">
          {intl.formatMessage({ id: 'registration_welcome' })}
        </Typography>
      </Grid>
      <Grid item md={12} sm={12} py={4}>
        <Typography align="center" variant="h5">
          {intl.formatMessage({ id: 'appreciate_post' })}
        </Typography>
      </Grid>
      <Grid item md={12} sm={12}>
        <Typography align="center" variant="h5">
          {intl.formatMessage({ id: 'we_have_send_an_email' })}
        </Typography>
      </Grid>

      <Grid
        item
        md={12}
        sm={12}
        alignItems="center"
        className={classes.iconStyle}
        py={4}
      >
        <CheckCircleIcon
          fontSize="large"
          className={classes.successIconStyle}
        />
        <Typography
          variant="h5"
          className={classes.registrationSuccessFontStyle}
        >
          {intl.formatMessage({ id: 'registration_successful' })}
        </Typography>
      </Grid>
      <Grid item md={12} sm={12}>
        <Typography
          align="center"
          variant="h6"
          onClick={() => history.push('/login')}
        >
          {`${intl.formatMessage({ id: 'you_may_login_now' })} `}
          <Link className={classes.linkTextDecoration}>
            {intl.formatMessage({ id: 'login' })}
          </Link>
        </Typography>
      </Grid>
      <Grid item md={12} sm={12} py={7}>
        <Typography variant="body1" align="center">
          {intl.formatMessage({ id: 'tell_your_friends' })}
        </Typography>
        <Typography variant="body1">
          <ul className={classes.unorderedListSocial}>
            <li className={classes.footerList}>
              <Link className={classes.followUsColor}>
                <FacebookIcon />
              </Link>
            </li>
            <li className={classes.footerList}>
              <Link className={classes.followUsColor}>
                <YouTubeIcon />
              </Link>
            </li>
            <li className={classes.footerList}>
              <Link className={classes.followUsColor}>
                <TwitterIcon />
              </Link>
            </li>
            <li className={classes.footerList}>
              <Link className={classes.followUsColor}>
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RegistrationSuccess;
