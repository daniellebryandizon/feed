import React from 'react';

import Card from '../card';

import { Typography, Box, Tooltip, Fab, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Patrick from '../../css/images/patrick.jpg';

import '../../css/components/profile/profile-following.css';

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '80px',
        height: '80px',
        marginTop: '45px',
        marginBottom: '15px',
        backgroundColor: '#f57c00!important'
    }
}));

const ProfileFollowing = () => {
    
    const classes = useStyles();

    return (
        <Box className="profile-following">
            <Box>
                <Box className="profile-following-header">
                    <Typography variant="h6">Following</Typography>
                </Box>
                <Divider></Divider>
                <Box className="profile-following-body">
                    <Box elevation={3} className="following-add-item">
                        <Tooltip title="Follow" aria-label="follow">
                            <Fab className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                        <Typography>Follow!</Typography>
                    </Box>
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileFollowing;