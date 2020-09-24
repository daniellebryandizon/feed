import React, { useState } from 'react';
import AddedIngredientsList from './add-ingredients-list';
import CustomTextField from '../helpers/CustomTextField';

//CSS IMPORTS
import { Box, Typography, Button, Paper, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import '../../css/components/recipe/add-recipe.css';

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '35px',
        height: '35px',
        backgroundColor: '#ffa726 !important',
    }
}));

const AddRecipe = () => {

    const [recipe, setRecipe] = useState({
        uploadedPhoto: null,
        ingredients: [

        ],
        addIngredient: false
    })

    const { uploadedPhoto, ingredients, addIngredient } = recipe;

    const addSingleIngredient = (event) => {
        event.preventDefault();

        console.log('Hello ingredient')

    }

    const classes = useStyles();

    return (
        <Box className="add-recipe-body">
            <form>
                <Typography variant="subtitle2"><span className="logo-accent">|</span> Title</Typography>
                <CustomTextField
                    id="standard-basic"
                    autoComplete="off"
                    type="text"
                    name=""
                    className="text-field" />
                <Typography variant="subtitle2"><span className="logo-accent">|</span> Description</Typography>
                <CustomTextField
                    id="standard-basic"
                    autoComplete="off"
                    type="text"
                    name=""
                    className="text-field" />
                <Box className="image-upload-container">
                    <Box className="image-upload-header">
                        <Typography variant="subtitle2"><span className="logo-accent">|</span> Photo</Typography>
                        <Button component="label"> Upload
                                <input
                                type="file"
                                accept='image/*'
                                style={{ display: "none" }}
                                onChange={(event) => {
                                    setRecipe({
                                        ...recipe,
                                        uploadedPhoto: URL.createObjectURL(event.target.files[0])
                                    })
                                }} />
                        </Button>
                    </Box>
                    {
                        uploadedPhoto === null ? '' :
                            (
                                <Paper className="image-upload-body">
                                    <img src={uploadedPhoto} alt="sample photo" />
                                </Paper>
                            )
                    }
                </Box>
                <Typography variant="subtitle2"><span className="logo-accent">|</span> Ingredients</Typography>
                <Box className="add-ingredient-container">
                    {
                        addIngredient ?
                            (
                                <form onSubmit={addSingleIngredient}>
                                    <Box className="add-quantity-name">
                                        <Box>
                                            <Typography><span className="logo-accent">|</span> Quantity</Typography>
                                            <CustomTextField
                                                id="standard-basic"
                                                autoComplete="off"
                                                type="number"
                                                name=""
                                                className="text-field" />
                                        </Box>
                                        <Box>
                                            <Typography><span className="logo-accent">|</span> Name</Typography>
                                            <CustomTextField
                                                id="standard-basic"
                                                autoComplete="off"
                                                type="text"
                                                name=""
                                                className="text-field" />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography><span className="logo-accent">|</span> Notes</Typography>
                                        <CustomTextField
                                            id="standard-basic"
                                            autoComplete="off"
                                            type="text"
                                            name=""
                                            className="text-field" />
                                    </Box>
                                    <Box className="add-ingredient-controls">
                                        <Button type='submit'>Add</Button>
                                        <Button onClick={() => {
                                            setRecipe({
                                                ...recipe,
                                                addIngredient: false
                                            })
                                        }}>Cancel</Button>
                                    </Box>

                                </form>
                            )
                            :
                            (
                                <Box>
                                    <AddedIngredientsList ingredientList={ingredients} />
                                    <Box className="add-ingredient-control">
                                        <Tooltip disableHoverListener onClick={() => {
                                            setRecipe({
                                                ...recipe,
                                                addIngredient: true
                                            })
                                        }}>
                                            <Fab className={classes.fab}>
                                                <AddIcon />
                                            </Fab>
                                        </Tooltip>
                                        <Typography>Add ingredient</Typography>
                                    </Box>
                                </Box>
                            )
                    }
                </Box>
            </form>

        </Box >
    )
}

export default AddRecipe;