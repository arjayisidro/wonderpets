import React from 'react';
import { useHistory } from 'react-router-dom';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

interface Props {
  isAuthenticated: Boolean;
}

const HomeIconSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

export const HomeIcon: React.FC<Props> = ({ isAuthenticated }) => {
  const history = useHistory();

  return (
    <HomeIconSVG
      fontSize="large"
      onClick={() => history.push(isAuthenticated ? '/dashboard' : '/')}
    />
  );
};
