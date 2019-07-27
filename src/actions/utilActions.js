import { SHOW_SNACKBAR } from './types';

export const showSnackBar = (variant, message) => dispatch => {
    dispatch({
        type: SHOW_SNACKBAR,
        payload: { variant, message}
    });
};