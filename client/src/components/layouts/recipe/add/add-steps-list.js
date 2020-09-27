import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Box, Typography } from '@material-ui/core';

const AddedStepsList = ({ steps }) => {
    return (
        <Fragment>
            {
                Object.keys(steps).length > 0 ?
                    (
                        steps.map(step => (
                            <Box className="step-item">
                                <Typography variant="h6"><span className="logo-accent">| </span>{steps.indexOf(step) + 1 + `.`} {step.name}</Typography>
                                <Typography>{step.note}</Typography>
                            </Box>
                        ))
                    )
                    :
                    (
                        <Box style={{ padding: '20px' }}>
                            {`No steps added...`}
                        </Box>
                    )
            }
        </Fragment>
    )
}

AddedStepsList.propTypes = {
    steps: PropTypes.arrayOf(Object).isRequired
}

export default AddedStepsList;