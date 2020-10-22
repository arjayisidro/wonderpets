import Colors from '../../styles/Colors';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    footerContainer: {
      position: 'sticky',
      overflow: 'hidden',
      backgroundColor: Colors.slate,
      textAlign: 'center',
      '& button': {
        marginTop: theme.spacing(3),
      },
    },
    footerFontColor: {
      color: Colors.white,
      fontWeight: 'bold',
    },
    input: {
      color: Colors.white,
    },
    footerTextField: {
      color: Colors.white,
      width: '30%',
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: theme.spacing(2),
      },
    },
    fotterButton: {
      paddingTop: theme.spacing(1.2),
      paddingBottom: theme.spacing(1.2),
      color: Colors.white,
      backgroundColor: Colors.buttonGrey,
    },
    socialStyles: {
      textAlign: 'left',
      color: Colors.white,
    },
    unorderListFooter: {
      display: 'contents',
      listStyleType: 'none',
    },
    footerList: {
      display: 'table-cell',
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(2),
    },
    footerDivider: {
      backgroundColor: Colors.buttonGrey,
      marginBottom: theme.spacing(5),
    },
    followUsColor: {
      color: Colors.termsGrey,
      textAlign: 'center',
      cursor: 'pointer',
    },
    unorderedListSocial: {
      display: 'table',
      margin: '0 auto',
      padding: theme.spacing(0, 2),
    },
    iconStyle: {
      display: 'flex',
      justifyContent: 'center',
    },
    successIconStyle: {
      height: theme.spacing(10),
      width: theme.spacing(10),
      color: Colors.green,
    },
    registrationSuccessFontStyle: {
      color: Colors.green,
    },
    linkTextDecoration: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
    allRightsReserved: {
      height: theme.spacing(12),
    },
  })
);

export default Styles;
