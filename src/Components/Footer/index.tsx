import MuiGrid from '@material-ui/core/Grid';
import styled from '@material-ui/styles/styled';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Divider from '@material-ui/core/Divider';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Styles from './Styles';
import { Typography, Input } from '@material-ui/core';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props {}

function Footer(props: Props) {
  const intl = useIntl();
  const classes = Styles();

  return (
    <Grid container mt={5} className={classes.footerContainer}>
      <Grid item md={12} sm={12} pt={10} pb={5}>
        <Typography className={classes.footerFontColor} variant="h5">
          {intl.formatMessage({ id: 'want_to_receive_updates' })}
        </Typography>
        <TextField
          variant="filled"
          size="small"
          placeholder={intl.formatMessage({ id: 'enter_email' })}
          className={classes.footerTextField}
          InputProps={{
            className: classes.input,
          }}
        />
        <Button
          variant="outlined"
          size="large"
          className={classes.fotterButton}
        >
          {intl.formatMessage({ id: 'subscribe' })}
        </Button>
      </Grid>
      <Grid item md={4} px={20} pb={10} className={classes.socialStyles}>
        <Typography variant="h6">
          {intl.formatMessage({ id: 'follow_us' })}
        </Typography>
        <ul className={classes.unorderListFooter}>
          <li className={classes.footerList}>
            <Link>
              <FacebookIcon />
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link>
              <YouTubeIcon />
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link>
              <TwitterIcon />
            </Link>
          </li>
          <li className={classes.footerList}>
            <Link>
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item md={2} className={classes.socialStyles}>
        <Typography variant="h5" gutterBottom>
          {intl.formatMessage({ id: 'support' })}
        </Typography>
        <ul className={classes.unorderListFooter}>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'contact_us' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'faqs' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'shipping_and_returns' })}
            </Typography>
          </li>
        </ul>
      </Grid>
      <Grid item md={2} className={classes.socialStyles}>
        <Typography variant="h5" gutterBottom>
          {intl.formatMessage({ id: 'shop' })}
        </Typography>
        <ul className={classes.unorderListFooter}>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'accessories' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'foods' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'vitamins' })}
            </Typography>
          </li>
        </ul>
      </Grid>
      <Grid item md={2} className={classes.socialStyles}>
        <Typography variant="h5" gutterBottom>
          {intl.formatMessage({ id: 'company' })}
        </Typography>
        <ul className={classes.unorderListFooter}>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'our_story' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'careers' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'terms_and_condtion' })}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              {intl.formatMessage({ id: 'privacy_and_cookie_policy' })}
            </Typography>
          </li>
        </ul>
      </Grid>

      <Grid item md={12}>
        <Divider className={classes.footerDivider} />
        <Typography variant="body1" className={classes.input}>
          &copy;
          {` ${new Date().getFullYear()} ${intl.formatMessage({
            id: 'all_rights_reserved',
          })}`}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
