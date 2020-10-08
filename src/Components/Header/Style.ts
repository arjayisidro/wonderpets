import Colors from '../../styles/Colors';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: Colors.slate,
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
    },
  })
);

export default Styles;
