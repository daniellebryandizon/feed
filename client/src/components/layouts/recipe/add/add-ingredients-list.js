import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    Box
} from '@material-ui/core';

const AddedIngredientsList = ({ ingredientList }) => {
    return (
        <Fragment>
            {
                Object.keys(ingredientList).length > 0 ?
                    (
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Unit</TableCell>
                                        <TableCell>Notes</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    ingredientList.map((ingredient) => (
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>{ingredient.quantity}</TableCell>
                                                <TableCell>{ingredient.name}</TableCell>
                                                <TableCell>{ingredient.unit}</TableCell>
                                                <TableCell>{ingredient.note}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    ))
                                }
                            </Table>
                        </TableContainer >
                    )
                    :
                    (
                        <Box style={{ padding: '20px' }}>
                            {`No ingredients added...`}
                        </Box>
                    )
            }
        </Fragment>
    )
}

AddedIngredientsList.propTypes = {
    ingredientList: PropTypes.arrayOf(Object).isRequired
}

export default AddedIngredientsList;
