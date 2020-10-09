import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//CSS IMPORTS
import { Box, Typography, Dialog, DialogTitle, DialogContent, Divider } from '@material-ui/core';

import '../../css/components/profile/edit-profile.css';

const EditProfile = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
            maxWidth="sm"
            className="edit-profile-dialog">
            <DialogTitle>Edit Profile</DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <Box className="edit-profile-content">
                    <Box className="edit-profile-image">
                        Image Profile
                    </Box>
                    <Box className="edit-profile-tags">
                        Tags Profile
                    </Box>
                    <Box className="edit-profile-about">
                        About Profile
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default EditProfile;