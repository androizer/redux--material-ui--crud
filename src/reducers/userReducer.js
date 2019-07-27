import { FETCH_USERS, ADD_USER, EDIT_USER, DELETE_USER } from "../actions/types";

const initialState = {
    allUsers: [],
    message: "Default",
    variant: "success"
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                newUsers: action.payload,
                message: "New Users Added",
                variant: "success"
            }
        case EDIT_USER:
            return {
                ...state,
                editUsers: action.payload,
                message: "Users Edited Successfully",
                variant: "info"
            }
        case DELETE_USER:
            return {
                ...state,
                deleteUsers: action.payload,
                message: "User Deleted Successfully",
                variant: "error"
            }
        default:
            return state;
    }
}