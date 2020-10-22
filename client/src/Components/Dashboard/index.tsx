import React from 'react';
import styled from '@material-ui/styles/styled';
import MuiGrid from '@material-ui/core/Grid';
import { useIntl } from 'react-intl';
import {
  compose as composeStyles,
  palette,
  sizing,
  spacing,
} from '@material-ui/system';
import Navbar from './Components/Navbar';
import { Typography } from '@material-ui/core';
import Styles from './Styles';

const Grid = styled(MuiGrid)(composeStyles(spacing, palette, sizing));

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const intl = useIntl();
  const classes = Styles();
  return (
    <Grid container py={5} px={10}>
      <Grid item md={12} sm={12}>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
