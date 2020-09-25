import React from 'react';
import PropTypes from 'prop-types';

import CustomTextField from '../../helpers/CustomTextField';

//CSS IMPORTS
import { Box, Button, Paper, TextareaAutosize, Typography } from '@material-ui/core';
import '../../../css/components/recipe/add/add-introduction.css';

const AddIntroduction = (
    { recipe: {
        title,
        description,
        uploadedPhoto,
        category,
        tags
    },
        saveIntro,
        uploadPhoto }) => {

    return (
        <Box className="add-introduction-container">
            <Typography variant="subtitle2"><span className="logo-accent">|</span> Title</Typography>
            <CustomTextField
                id="standard-basic"
                autoComplete="off"
                placeholder="Enter title"
                type="text"
                name="title"
                value={title}
                className="text-field"
                onChange={saveIntro} />
            <Typography variant="subtitle2"><span className="logo-accent">|</span> Description</Typography>
            <TextareaAutosize
                className="add-introduction-text-area"
                rowsMin={4}
                rowsMax={4}
                aria-label="empty textarea"
                placeholder="Enter description"
                type="text"
                name="description"
                value={description}
                onChange={saveIntro} />
            <Box className="image-upload-container">
                <Box className="image-upload-header">
                    <Typography variant="subtitle2"><span className="logo-accent">|</span> Photo</Typography>
                    <Button component="label"> Upload
                            <input
                                type="file"
                                accept='image/*'
                                style={{ display: "none" }}
                                onChange={uploadPhoto} 
                                />
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
            <Typography variant="subtitle2"><span className="logo-accent">|</span> Category</Typography>
            <CustomTextField
                id="standard-basic"
                autoComplete="off"
                placeholder="Enter category"
                type="category"
                name="category"
                value={category}
                className="text-field"
                onChange={saveIntro} />
            <Typography variant="subtitle2"><span className="logo-accent">|</span> Tags</Typography>
            <CustomTextField
                id="standard-basic"
                autoComplete="off"
                placeholder="Press enter to separate between tags"
                type="text"
                name="tags"
                value={tags}
                className="text-field"
                onChange={saveIntro} />
        </Box >
    )
}

AddIntroduction.propTypes = {
    recipe: PropTypes.object.isRequired,
    saveIntro: PropTypes.func.isRequired,
    uploadPhoto: PropTypes.func.isRequired
}

export default AddIntroduction;