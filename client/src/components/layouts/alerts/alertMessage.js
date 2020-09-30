import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//FUNCTION IMPORTS
import { removeAlert } from '../../../actions/alertMessage';

//CSS IMPORTS
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import '../../css/components/alerts/alertMessage.css'

const AlertMessage = ({ alertMessage: { message, type }, removeAlert }) => {

    const [alert, setAlert] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
    });

    const { open, vertical, horizontal } = alert;

    return (
        <Fragment>
            {
                message !== '' ?
                    (
                        <Snackbar
                            anchorOrigin={{ vertical, horizontal }}
                            open={open}
                            onClose={() => {
                                setAlert({
                                    ...alert,
                                    open: false
                                });

                                removeAlert();
                            }}
                            key={vertical + horizontal}
                            autoHideDuration={3000}
                        >
                            <MuiAlert severity={type} elevation={6} variant="filled">
                                {message}
                            </MuiAlert>
                        </Snackbar>
                    ) : ''
            }

        </Fragment>
    )
}

AlertMessage.propTypes = {
    alertMessage: PropTypes.object.isRequired,
    removeAlert: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    alertMessage: state.alertMessage
})

export default connect(mapStateToProps, { removeAlert })(AlertMessage);