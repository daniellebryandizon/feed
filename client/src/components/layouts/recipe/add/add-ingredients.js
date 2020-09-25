import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddedIngredientsList from './add-ingredients-list';
import CustomTextField from '../../helpers/CustomTextField';

//CSS IMPORTS
import { Box, Fab, Tooltip, Typography, TextareaAutosize, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import '../../../css/components/recipe/add/add-ingredients.css'

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '35px',
        height: '35px',
        backgroundColor: '#f57c00 !important',
    }
}));

const AddIngredients = ({ ingredients, saveIngredients }) => {

    const [addIngredient, setAddIngredient] = useState(false);

    const [ingredient, setIngredient] = useState({
        quantity: 1,
        unit: '',
        name: '',
        note: ''
    })

    const { quantity, unit, name, note } = ingredient;

    const onChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        setIngredient({
            ...ingredient,
            [name]: value
        })
    }

    const addSingleIngredient = (event) => {
        event.preventDefault();

        saveIngredients(ingredient);
        
        setAddIngredient(false);
        
        setIngredient({
            quantity: 1,
            unit: '',
            name: '',
            note: ''
        })
    }

    const classes = useStyles();

    return (
        <Box className="add-ingredient-container">
            {
                addIngredient ?
                    (
                        <Box className="add-single-ingredient">
                            <Box className="add-single-ingredient-header">
                                <Typography variant="h6">Add Ingredient</Typography>
                                <Divider></Divider>
                            </Box>
                            <form onSubmit={addSingleIngredient}>
                                <Box className="add-single-quantity-unit">
                                    <Box>
                                        <Typography variant="h6"><span className="logo-accent">|</span> Quantity</Typography>
                                        <CustomTextField
                                            id="standard-basic"
                                            autoComplete="off"
                                            placeholder="Enter Quantity"
                                            type="number"
                                            name="quantity"
                                            value={quantity}
                                            className="text-field"
                                            onChange={onChange}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6"><span className="logo-accent">|</span> Unit</Typography>
                                        <CustomTextField
                                            id="standard-basic"
                                            autoComplete="off"
                                            placeholder="Enter Unit"
                                            type="text"
                                            name="unit"
                                            value={unit}
                                            className="text-field"
                                            onChange={onChange}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="h6"><span className="logo-accent">|</span> Name</Typography>
                                    <CustomTextField
                                        id="standard-basic"
                                        autoComplete="off"
                                        placeholder="Enter Name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        className="text-field"
                                        onChange={onChange}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6"><span className="logo-accent">|</span> Note</Typography>
                                    <TextareaAutosize
                                        className="add-ingredient-text-area"
                                        rowsMin={4}
                                        rowsMax={4}
                                        aria-label="empty textarea"
                                        placeholder="Enter Note"
                                        name="note"
                                        value={note}
                                        type="text"
                                        onChange={onChange}
                                    />
                                </Box>
                                <Box className="add-single-ingredient-controls">
                                    <Button type="submit">Add</Button>
                                    <Button onClick={() => { setAddIngredient(false) }}>Cancel</Button>
                                </Box>
                            </form>
                        </Box>
                    )
                    :
                    (
                        <Box>
                            <AddedIngredientsList ingredientList={ingredients} />
                            <Box className="add-ingredient-control">
                                <Tooltip disableHoverListener onClick={() => { setAddIngredient(true) }}>
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
    )
}

AddIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(Object).isRequired,
    saveIngredients: PropTypes.func.isRequired
}

export default AddIngredients;