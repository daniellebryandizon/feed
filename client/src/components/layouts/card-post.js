import React, { Fragment } from 'react';

//CSS IMPORTS
import { Paper, Typography, Box, Avatar } from '@material-ui/core';

import '../css/components/card-post.css'

const CardPost = ({ img }) => {
    return (
        <Fragment>
            <Paper className="card-post">
                <Box className="card-post-header">
                    <Avatar />
                    <Box>
                        <Typography>SpongeBob SquarePants</Typography>
                        <Typography>1 hr</Typography>
                    </Box>
                </Box>
                <Box className="card-post-body">
                    <img src={img} />
                </Box>
                <Box className="card-post-footer">
                    <Box className="card-post-like">
                        Like
                    </Box>
                    <Box className="card-post-review">
                        Review
                    </Box>
                    <Box className="card-post-share">
                        Share
                    </Box>
                </Box>
            </Paper>
        </Fragment>
    )
}

export default CardPost;