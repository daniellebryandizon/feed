import React from 'react';

import Card from '../card';

import { Typography, Box, Tooltip, Fab, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ColoredPatties from '../../css/images/colored-patties.png';

import '../../css/components/profile/profile-recipes.css';

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '80px',
        height: '80px',
        marginTop: '45px',
        marginBottom: '15px',
        backgroundColor: '#ffa726 !important'
    }
}));

const ProfileRecipes = () => {

    const classes = useStyles();

    return (
        <Box className="profile-recipes">
            <Box>
                <Box className="profile-recipes-header">
                    <Typography variant="h6">Recipes</Typography>
                </Box>
                <Divider></Divider>
                <Box className="profile-recipes-body">
                    <Box elevation={3} className="recipe-add-item">
                        <Tooltip title="Add Recipe" aria-label="add recipe">
                            <Fab className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                        <Typography>Add Recipe</Typography>
                    </Box>
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileRecipes;