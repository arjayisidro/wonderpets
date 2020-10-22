import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Colors } from '../../styles/Colors';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    registrationRoot: {
      maxWidth: theme.spacing(50),
      margin: '0 auto',
    },
    svgIcon: {
      margin: '0 auto',
      paddingBottom: theme.spacing(2),
      cursor: 'pointer',
    },
    paperPadding: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(3),
    },
    loginButton: {
      height: '7vh',
    },
    circularBgColor: {
      color: Colors.white,
    },
    registrationTermsStyle: {
      color: Colors.termsGrey,
    },
  })
);

export default Styles;
