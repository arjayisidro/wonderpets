import React from 'react';
import { useIntl } from 'react-intl';
import { Typography, IconButton, Divider } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import styled from '@material-ui/styles/styled';
import MuiGrid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import Styles from '../../Styles';

const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));
interface Props {}

const Navbar: React.FC<Props> = () => {
  const classes = Styles();
  const intl = useIntl();

  return (
    <Grid container>
      <Grid item md={6}>
        <ul className={classes.navbarUnorderedList}>
          <li className={classes.navbarOrderedList}>
            <Typography variant="h4">
              <IconButton aria-label="category">
                <AppsIcon />
                {intl.formatMessage({ id: 'category' })}
                <IconButton aria-label="expand-category">
                  <ExpandMoreIcon />
                </IconButton>
                <Divider
                  orientation="vertical"
                  className={classes.navbarDivider}
                />
              </IconButton>
            </Typography>
          </li>

          <li className={classes.navbarOrderedList}>
            <Typography variant="h5">
              {intl.formatMessage({ id: 'home' })}
            </Typography>
          </li>
          <li className={classes.navbarOrderedList}>
            <Typography variant="h5">
              {intl.formatMessage({ id: 'shop' })}
            </Typography>
          </li>
          <li className={classes.navbarOrderedList}>
            <Typography variant="h5">
              {intl.formatMessage({ id: 'blogs' })}
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Navbar;
