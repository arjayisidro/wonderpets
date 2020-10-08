import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import MuiGrid from '@material-ui/core/Grid';
import {
  Paper,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Button,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import Styles from './Styles';
import {
  CARD_ITEMS,
  CATEGORY_ITEMS,
  CATEGORY_ITEMS_TWO,
  CATEGORY_ITEMS_THREE,
} from './Constants';
import styled from '@material-ui/styles/styled';
import { useIntl } from 'react-intl';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import { MyTextField } from '../Common/TextField';
const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Values {
  userName: string;
  password: string;
  emailAddress: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function Contents(props: Props) {
  const classes = Styles();
  const [value, setValue] = useState(0);
  const intl = useIntl();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Grid hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
        {value === index && <Box>{children}</Box>}
      </Grid>
    );
  }
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const onSubmit = (values: object) => {};

  return (
    <React.Fragment>
      <Grid px={4} container className={classes.carouselStyles}>
        <Grid item md={7} py={8} px={5}>
          <Typography variant="h3">
            {intl.formatMessage({ id: 'pet_link' })}
          </Typography>
        </Grid>
        <Grid item md={4} py={8} px={5}>
          <Paper style={{ padding: '16px' }}>
            <Formik
              initialValues={{ password: '', emailAddress: '', userName: '' }}
              onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <Grid pb={2}>
                    <Field
                      component={MyTextField}
                      name="username"
                      label={intl.formatMessage({ id: 'username' })}
                      placeholder={intl.formatMessage({ id: 'username' })}
                      size="small"
                    />
                  </Grid>
                  <Grid pb={2}>
                    <Field
                      component={MyTextField}
                      name="emailAddress"
                      label={intl.formatMessage({ id: 'email_address' })}
                      placeholder={intl.formatMessage({ id: 'email_address' })}
                      size="small"
                    />
                  </Grid>
                  <Grid pb={3}>
                    <Field
                      component={MyTextField}
                      name="password"
                      label={intl.formatMessage({ id: 'password' })}
                      placeholder={intl.formatMessage({ id: 'password' })}
                      type="password"
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
                      {intl.formatMessage({ id: 'sign_up_for_pet_link' })}
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
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>

      <Grid container px={5} py={10}>
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
                  <CardMedia
                    component="img"
                    height="140"
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
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActionStyles}>
                    <Button size="large">
                      <Typography variant="body2">
                        {intl.formatMessage({ id: 'view' })}
                      </Typography>
                    </Button>
                    <Button size="large">
                      <Typography variant="body2">
                        {intl.formatMessage({ id: 'add_to_cart' })}
                      </Typography>
                    </Button>
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
                    height="140"
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
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActionStyles}>
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
                    height="140"
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
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActionStyles}>
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
      <Grid container px={5} py={10} spacing={4}>
        {CARD_ITEMS.map((item) => (
          <Grid item md={4}>
            <Card className={classes.paperImg}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
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
    </React.Fragment>
  );
}

export default Contents;
