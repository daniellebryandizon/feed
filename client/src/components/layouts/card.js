import React, { Fragment } from 'react';

import { Typography, Paper, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

import '../css/components/card.css';

const Card = ({ img, title }) => {
    return (
        <Fragment>
            <Paper elevation={3} className="card-item">
                <img src={img}></img>
                <Box>
                    <Typography>{title}</Typography>
                </Box>
                <Box className="card-item-icon">
                    <FavoriteIcon />
                </Box>
            </Paper>
        </Fragment>
    )
}

export default Card;