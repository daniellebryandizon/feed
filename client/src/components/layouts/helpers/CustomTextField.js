import {
    TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const CustomTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#757575",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#757575",
        },
        "& .MuiOutlinedInput-root:after": {
            borderColor: "#757575",
        },
    }
})(TextField);

export default CustomTextField;