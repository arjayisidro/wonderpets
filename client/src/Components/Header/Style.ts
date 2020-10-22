import Colors from '../../styles/Colors';
import {
  makeStyles,
  createStyles,
  Theme,
  fade,
} from '@material-ui/core/styles';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: Colors.slate,
    },
    userNameStyle: {
      textTransform: 'capitalize',
    },
    root: {
      flexGrow: 1,
      position: 'sticky',
      top: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    avatarStyle: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    wishListStyle: {
      paddingLeft: theme.spacing(2),
    },
  })
);

export default Styles;
