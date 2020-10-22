import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Colors } from '../../styles/Colors';

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    navbarUnorderedList: {
      listStyleType: 'none',
    },
    navbarOrderedList: {
      color: Colors.menuGrey,
      display: 'table-cell',
      padding: theme.spacing(0, 2),
    },
    navbarDivider: {
      height: theme.spacing(4),
      marginLeft: theme.spacing(2),
    },
  })
);

export default Styles;
