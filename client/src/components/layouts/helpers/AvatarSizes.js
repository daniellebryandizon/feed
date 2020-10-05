import { makeStyles } from '@material-ui/core/styles';

const AvatarSize = makeStyles((theme) => ({
    smallest: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    medium: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    large: {
        width: theme.spacing(23),
        height: theme.spacing(23),
    },
    profilePic: {
        width: theme.spacing(23),
        height: theme.spacing(23),
    }
}));

export default AvatarSize;