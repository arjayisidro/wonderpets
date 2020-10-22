import {
  AppBar,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  Fade,
  Typography,
  Avatar,
  InputBase,
  Badge,
  IconButton,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import CartBadges from './CardBadges';
import MuiGrid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { IRootState } from '../../Store/GlobalStore';
import store from '../../Store/GlobalStore';
import styled from '@material-ui/styles/styled';
import { useHistory, withRouter, RouteComponentProps } from 'react-router-dom';
import { LogoutUser } from '../../API/Login/loginAuth';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Styles from './Style';
import { HomeIcon } from '../Common/Icons/HomeIcon';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props extends RouteComponentProps<any> {
  isAuthenticated: Boolean;
  user?: any;
}

const Header: React.FC<Props> = ({ isAuthenticated, user }) => {
  const intl = useIntl();
  const classes = Styles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.root}>
      <AppBar position="sticky" className={classes.container}>
        <Toolbar>
          <Grid item md={isAuthenticated ? 2 : 8}>
            <IconButton aria-label="home" color="inherit">
              <HomeIcon isAuthenticated={isAuthenticated} />
            </IconButton>
          </Grid>

          <Grid item md={5}>
            <Grid className={classes.search}>
              <Grid className={classes.searchIcon}>
                <SearchIcon />
              </Grid>
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </Grid>
          </Grid>

          {isAuthenticated && (
            <>
              <Grid item md={2}>
                <Typography component="span" variant="body1">
                  {intl.formatMessage({ id: 'my_cart' })}
                  <CartBadges />
                </Typography>
              </Grid>
              <Grid item md={1}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Grid>
            </>
          )}

          <Grid item md={1}>
            {isAuthenticated && (
              <>
                <Typography component="p" align="center" variant="body2">
                  {`${intl.formatMessage({ id: 'hello' })}`}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.userNameStyle}
                >
                  {user.name}
                </Typography>
              </>
            )}
          </Grid>
          <Grid item md={1}>
            {isAuthenticated ? (
              <>
                <Button
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                >
                  <Avatar
                    alt={user.name}
                    src={user.avatar}
                    className={classes.avatarStyle}
                  />
                </Button>

                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <MenuItem onClick={handleClose}>
                    {intl.formatMessage({ id: 'profile' })}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {intl.formatMessage({ id: 'my_account' })}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      store.dispatch(LogoutUser());
                    }}
                  >
                    {intl.formatMessage({ id: 'logout' })}
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                type="button"
                onClick={() => history.push('/login')}
              >
                <Typography align="right">
                  {intl.formatMessage({ id: 'login' })}
                </Typography>
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

const mapProps = (state: IRootState) => {
  return {
    isAuthenticated: state.loginStore.isAuthenticated,
    user: state.loginStore.user,
  };
};

export default withRouter(connect(mapProps)(Header));
