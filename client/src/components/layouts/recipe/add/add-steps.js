import React, { useEffect, useState } from 'react';

//CSS IMPORTS
import { Box, Fab, Tooltip, Typography, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import '../../../css/components/recipe/add/add-steps.css';

const useStyles = makeStyles((theme) => ({
    fab: {
        width: '35px',
        height: '35px',
        backgroundColor: '#f57c00 !important',
    }
}));

const AddSteps = () => {

    const [addStep, setAddStep] = useState(false);

    const [step, setStep] = useState('');

    const classes = useStyles();

    return (
        <Box className="add-steps-container">
            {
                addStep ?
                    'Add Step Here'
                    :
                    (
                        <Box className="add-step-control">
                            <Tooltip disableHoverListener onClick={() => { setAddStep(true) }}>
                                <Fab className={classes.fab}>
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                            <Typography>Add Step</Typography>
                        </Box>
                    )
            }
        </Box>
    )
}

export default AddSteps;