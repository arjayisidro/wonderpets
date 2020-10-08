import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
  isLoading: boolean;
}

const CircularUnderLoad: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? <CircularProgress disableShrink /> : null;
};
export default CircularUnderLoad;
