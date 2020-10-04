import React, { Fragment } from 'react';

//CSS IMPORTS
import { Paper, Typography, Box, Avatar, Divider } from '@material-ui/core';
import AvatarSizes from './helpers/AvatarSizes';
import CustomTextField from './helpers/CustomTextField';

import Squidward from '../css/images/squidward.jpg';
import '../css/components/card-post.css'

const CardPost = ({ img }) => {

    const classes = AvatarSizes();

    return (
        <Fragment>
            <Paper className="card-post">
                <Box className="card-post-header">
                    <Avatar src={Squidward} className={classes.small} />
                    <Box>
                        <Typography>Squidward Tentacles</Typography>
                        <Typography>1 hr</Typography>
                    </Box>
                </Box>
                <Box className="card-post-body">
                    <img src={img} alt="card-post"/>
                </Box>
                <Box className="card-post-mid">
                    <Box className="card-post-like">
                        Like
                    </Box>
                    <Box className="card-post-share">
                        Share
                    </Box>
                </Box>
                <Divider></Divider>
                <Box className="card-post-footer">
                    <Avatar src={Squidward} className={classes.smallest} />
                    <Box>
                        <CustomTextField
                            id="standard-basic"
                            placeholder="Write a comment..."
                        />
                    </Box>
                </Box>
                <Comments />
                <Comments />
            </Paper>
        </Fragment>
    )
}

const Comments = () => {

    const classes = AvatarSizes();

    return (
        <Box className="card-post-comments">
            <Avatar
                src={Squidward}
                className={classes.smallest} />
            <Box>
                <Typography>
                    Welcome to the website
                </Typography>
            </Box>
        </Box>
    )
}

export default CardPost;