import { SHOW_SNACKBAR } from '../actions/types';

const initialState = {
    message: "Default",
    variant: "success"
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_SNACKBAR:
            return {
                ...state,
                message: action.payload.message,
                variant: action.payload.variant
            }
        default:
            return state;
    }
}