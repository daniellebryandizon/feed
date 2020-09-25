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

    console.log(Object.keys(ingredientList).length)
    return (
        <Fragment>
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
                    <TableBody>
                        {
                            Object.keys(ingredientList).length > 0 ?
                                ingredientList.map((ingredient) => (
                                    <TableRow>
                                        <TableCell>{ingredient.quantity}</TableCell>
                                        <TableCell>{ingredient.name}</TableCell>
                                        <TableCell>{ingredient.unit}</TableCell>
                                        <TableCell>{ingredient.note}</TableCell>
                                    </TableRow>
                                ))
                                :
                                (
                                    <Box style={{ padding: '20px' }}>
                                        {`No ingredients added`}
                                    </Box>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </Fragment>

    )
}

AddedIngredientsList.propTypes = {
    ingredientList: PropTypes.arrayOf(Object).isRequired
}

export default AddedIngredientsList;
