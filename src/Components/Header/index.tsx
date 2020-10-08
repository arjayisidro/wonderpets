import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MuiGrid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import styled from '@material-ui/styles/styled';
import { useHistory } from 'react-router-dom';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { homeMenu } from './constants';
import Styles from './Style';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

function Header(props: Props) {
  const intl = useIntl();
  const classes = Styles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className={classes.root}>
      <AppBar position="sticky" className={classes.container}>
        <Toolbar>
          <Typography variant="h6" align="center" className={classes.title}>
            {intl.formatMessage({ id: 'pet_link' })}
          </Typography>
          <Button
            color="inherit"
            type="button"
            onClick={() => history.push('/login')}
          >
            <Typography align="right">
              {intl.formatMessage({ id: 'login' })}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
