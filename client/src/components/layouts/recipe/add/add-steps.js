import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddedStepsList from './add-steps-list';
import CustomTextField from '../../helpers/CustomTextField';

//CSS IMPORTS
import { Box, Fab, Tooltip, Typography, TextareaAutosize, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import '../../../css/components/recipe/add/add-steps.css'

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '35px',
        height: '35px',
        backgroundColor: '#f57c00 !important',
    }
}));

const AddSteps = ({ steps, saveStep }) => {

    const [addStep, setAddStep] = useState(false);

    const [step, setStep] = useState({
        name: '',
        note: ''
    })

    const { name, note } = step;

    const onChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        setStep({
            ...step,
            [name]: value
        })
    }

    const addSingleStep = (event) => {
        event.preventDefault();

        saveStep(step);

        setAddStep(false);

        setStep({
            name: '',
            note: ''
        })
    }

    const classes = useStyles();

    return (
        <Box className="add-ingredient-container">
            {
                addStep ?
                    (
                        <Box className="add-single-step">
                            <Box className="add-single-step-header">
                                <Typography variant="h6">Add Step</Typography>
                                <Divider></Divider>
                            </Box>
                            <form onSubmit={addSingleStep}>
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
                                        className="add-step-text-area"
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
                                <Box className="add-single-step-controls">
                                    <Button type="submit">Add</Button>
                                    <Button onClick={() => { setAddStep(false) }}>Cancel</Button>
                                </Box>
                            </form>
                        </Box>
                    )
                    :
                    (
                        <Box>
                            <AddedStepsList steps={steps} />
                            <Box className="add-step-control">
                                <Tooltip disableHoverListener onClick={() => { setAddStep(true) }}>
                                    <Fab className={classes.fab}>
                                        <AddIcon />
                                    </Fab>
                                </Tooltip>
                                <Typography>Add step</Typography>
                            </Box>
                        </Box>
                    )
            }
        </Box>
    )
}

AddSteps.propTypes = {
    steps: PropTypes.arrayOf(Object).isRequired,
    saveStep: PropTypes.func.isRequired
}

export default AddSteps;