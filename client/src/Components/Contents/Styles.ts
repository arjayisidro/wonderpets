import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Colors } from '../../styles/Colors';
import BackgroundImage from '../../assets/images/bg-background.jpeg';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    carouselStyles: {
      height: theme.spacing(77),
      backgroundImage: 'url(' + BackgroundImage + ')',
      backgroundSize: 'cover',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        margin: 0,
      },
    },
    carouselLeftContentFontColor: {
      color: Colors.white,
    },
    images: {
      width: '100%',
      height: '100%',
    },
    paperImg: {
      minWidth: 275,
    },
    categoryClass: {
      display: 'flex',
    },
    cardActionStyles: {
      justifyContent: 'center',
      backgroundColor: Colors.grey,
    },
    registrationButton: {
      backgroundColor: Colors.green,
      color: Colors.white,
    },
    registrationTermsStyle: {
      color: Colors.termsGrey,
    },
    carouselPaddingTop: {
      padding: theme.spacing(2),
    },
  })
);

export default Styles;
