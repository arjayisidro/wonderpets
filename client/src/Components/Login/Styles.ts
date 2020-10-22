import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Colors } from '../../styles/Colors';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    loginRoot: {
      maxWidth: '380px',
      margin: '0 auto',
    },
    paperPadding: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(3),
    },
    linkTextDecoration: {
      textDecoration: 'none',
    },
    svgIcon: {
      margin: '0 auto',
      paddingBottom: theme.spacing(2),
      cursor: 'pointer',
    },
    loginButton: {
      height: '7vh',
    },
    circularBgColor: {
      color: Colors.white,
    },
  })
);

export default Styles;
