import React from 'react';
import Styles from '../../Login/Styles';
import { useHistory } from 'react-router-dom';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const HomeIconSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

export const SuccessIcon: React.FC = () => {
  const classes = Styles();
  const history = useHistory();

  return (
    <HomeIconSVG
      onClick={() => history.push('/')}
      className={classes.svgIcon}
      fontSize="large"
    />
  );
};
