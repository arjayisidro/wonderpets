import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Colors } from '../../styles/Colors';
import Image from '../../assets/images/image1.jpeg';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    carouselStyles: {
      height: theme.spacing(68),
      backgroundImage: 'url(' + Image + ')',
      backgroundSize: 'cover',
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
  })
);

export default Styles;
