import React from 'react';
import MuiGrid from '@material-ui/core/Grid';
import styled from '@material-ui/styles/styled';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import { useIntl } from 'react-intl';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

import { CARD_ITEMS } from '../Constants';
import Styles from '../Styles';

const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props {}

export const CardContents: React.FC<Props> = () => {
  const classes = Styles();
  const intl = useIntl();
  return (
    <Grid container px={5} py={10} spacing={4}>
      {CARD_ITEMS.map((item) => (
        <Grid item md={4}>
          <Card className={classes.paperImg}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image={item.imgSrc}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {intl.formatMessage({ id: item.title })}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {intl.formatMessage({ id: item.description })}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                {intl.formatMessage({ id: 'find_out_more' })}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
