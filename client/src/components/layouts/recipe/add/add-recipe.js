import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddIntroduction from './add-introduction';
import AddIngredients from './add-ingredients';
import AddSteps from './add-steps';

//CSS IMPORTS
import { Box, Button, Paper } from '@material-ui/core';
import '../../../css/components/recipe/add/add-recipe.css'

const AddRecipe = ({ cancelRecipe }) => {

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        uploadedPhoto: null,
        category: '',
        tags: [],
        cookTime: '',
        prepTime: '',
        ingredients: [],
        steps: [

        ],
    })

    const [menu, setMenu] = useState({
        introMenu: true,
        ingredientsMenu: false,
        stepsMenu: false
    })

    const {
        title,
        description,
        uploadedPhoto,
        tags,
        cookTime,
        prepTime,
        steps,
        ingredients,
    } = recipe;

    const { introMenu, ingredientsMenu, stepsMenu } = menu;

    const saveIntro = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        setRecipe({
            ...recipe,
            [name]: value
        })
    }

    const uploadPhoto = (event) => {
        event.preventDefault();

        setRecipe({
            ...recipe,
            uploadedPhoto: URL.createObjectURL(event.target.files[0])
        })
    }

    const saveIngredients = (ingredient) => {
        setRecipe({
            ...recipe,
            ingredients: [
                ...recipe.ingredients,
                ingredient
            ]
        })
    }

    const saveStep = (step) => {
        setRecipe({
            ...recipe,
            steps: [
                ...recipe.steps,
                step
            ]
        })
    }

    return (
        <Box>
            <Box className="add-recipe-save">
                <Box>
                    <Button>Save</Button>
                </Box>
                <Box>
                    <Button
                        className="add-recipe-cancel"
                        onClick={cancelRecipe}>
                        Cancel
                    </Button>
                </Box>
            </Box>
            <Paper>
                <Box className="add-recipe-menu">
                    <Box className={introMenu ? 'add-recipe-current-tab' : 'add-recipe-tab'}
                        onClick={() => {
                            setMenu({
                                introMenu: true,
                                ingredientsMenu: false,
                                stepsMenu: false
                            })
                        }}
                    >
                        <Button>Introduction</Button>
                    </Box>
                    <Box className={ingredientsMenu ? 'add-recipe-current-tab' : 'add-recipe-tab'}
                        onClick={() => {
                            setMenu({
                                introMenu: false,
                                ingredientsMenu: true,
                                stepsMenu: false
                            })
                        }}
                    >
                        <Button>Ingredients</Button>
                    </Box>
                    <Box className={stepsMenu ? 'add-recipe-current-tab' : 'add-recipe-tab'}
                        onClick={() => {
                            setMenu({
                                introMenu: false,
                                ingredientsMenu: false,
                                stepsMenu: true
                            })
                        }}
                    >
                        <Button>Steps</Button>
                    </Box>
                </Box>
                <Box className="add-recipe-body">
                    {
                        introMenu ?
                            (<AddIntroduction recipe={recipe} saveIntro={saveIntro} uploadPhoto={uploadPhoto} />)
                            : ingredientsMenu ?
                                (<AddIngredients ingredients={ingredients} saveIngredients={saveIngredients} />)
                                :
                                (<AddSteps steps={steps} saveStep={saveStep} />)
                    }
                </Box>
            </Paper>

        </Box>

    )
}

AddRecipe.propTypes = {
    cancelRecipe: PropTypes.func.isRequired
}

export default AddRecipe;