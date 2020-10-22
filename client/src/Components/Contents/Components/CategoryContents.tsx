import React, { useState } from 'react';
import MuiGrid from '@material-ui/core/Grid';
import styled from '@material-ui/styles/styled';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import {
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  CardHeader,
  Avatar,
  IconButton,
} from '@material-ui/core';
import WishList from '../../Header/Wishlist';
import ShareIcon from '@material-ui/icons/Share';
import { useIntl } from 'react-intl';
import Styles from '../Styles';
import {
  CATEGORY_ITEMS,
  CATEGORY_ITEMS_TWO,
  CATEGORY_ITEMS_THREE,
} from '../Constants';

const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export const CategoryContents: React.FC<Props> = () => {
  const [value, setValue] = useState<Number>(0);
  const intl = useIntl();
  const classes = Styles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <Grid hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
        {value === index && <Box>{children}</Box>}
      </Grid>
    );
  };

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Grid container px={5} py={5}>
      <Grid item md={12}>
        <Typography variant="h6" align="center">
          {intl.formatMessage({ id: 'shop_by_category' })}
        </Typography>
        <Grid
          item
          md={12}
          py={3}
          justify="center"
          className={classes.categoryClass}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Accessories" {...a11yProps(0)} />
            <Tab label="Foods" {...a11yProps(1)} />
            <Tab label="Vitamins" {...a11yProps(2)} />
          </Tabs>
        </Grid>
      </Grid>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3} px={5}>
          {CATEGORY_ITEMS.map((item) => (
            <Grid item md={3}>
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="250"
                  image={item.imgSrc}
                  title={intl.formatMessage({ id: 'item.title' })}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {intl.formatMessage({ id: item.description })}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <WishList />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3} px={5}>
          {CATEGORY_ITEMS_TWO.map((item) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.imgSrc}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {intl.formatMessage({ id: item.description })}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">
                    {intl.formatMessage({ id: 'view' })}
                  </Button>
                  <Button size="large">
                    {intl.formatMessage({ id: 'add_to_cart' })}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3} px={5}>
          {CATEGORY_ITEMS_THREE.map((item) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.imgSrc}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {intl.formatMessage({ id: item.description })}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">
                    {intl.formatMessage({ id: 'view' })}
                  </Button>
                  <Button size="large">
                    {intl.formatMessage({ id: 'add_to_cart' })}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Grid>
  );
};
