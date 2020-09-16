import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const AvatarSize = makeStyles((theme) => ({
    small: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    medium: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    large: {
        width: theme.spacing(23),
        height: theme.spacing(23),
    },
    profile: {
        width: theme.spacing(23),
        height: theme.spacing(23),
    }
}));

export default AvatarSize;