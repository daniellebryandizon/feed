import React, { useState } from 'react';

import Card from '../card';
import AddRecipe from '../recipe/add/add-recipe';

import { Typography, Box, Tooltip, Fab, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import steak from '../../css/images/actual_images/steak.jpg';

import '../../css/components/profile/profile-recipes.css';

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '80px',
        height: '80px',
        marginTop: '45px',
        marginBottom: '15px',
        backgroundColor: '#f57c00!important'
    }
}));

const ProfileRecipes = () => {

    const [recipe, setRecipe] = useState({
        isHome: true,
        isAdd: false,
        isView: false
    })

    const { isHome, isAdd } = recipe;

    const cancelRecipe = () => {
        setRecipe({
            isHome: true,
            isAdd: false,
            isView: false
        })
    }

    const classes = useStyles();

    return (
        <Box className="profile-recipes" >
            <Box>
                <Box className="profile-recipes-header">
                    <Typography variant="h6">{isHome ? 'Recipes' : isAdd ? 'Add Recipe' : ''}</Typography>
                </Box>
                <Divider></Divider>
                {
                    isHome ?
                        (
                            <Box className="profile-recipes-body">
                                <Box elevation={3} className="recipe-add-item">
                                    <Tooltip disableHoverListener onClick={() => {
                                        setRecipe({
                                            ...recipe,
                                            isHome: false,
                                            isAdd: true
                                        })
                                    }}>
                                        <Fab className={classes.fab}>
                                            <AddIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Typography>Add Recipe</Typography>
                                </Box>
                                <Card img={steak} title="Steak" />
                            </Box>
                        ) :
                        (<AddRecipe cancelRecipe={cancelRecipe} />)
                }
            </Box>
        </Box>
    )
}

export default ProfileRecipes;