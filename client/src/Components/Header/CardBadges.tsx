import React from 'react';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WishList from './Wishlist';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      padding: '0 4px',
    },
  })
)(Badge);

export default function CustomizedBadges() {
  return (
    <>
      <IconButton aria-label="cart" color="inherit">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <IconButton aria-label="favourites" color="inherit">
        <WishList />
      </IconButton>
    </>
  );
}
