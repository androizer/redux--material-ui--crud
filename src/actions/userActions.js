import { FETCH_USERS, ADD_USER, EDIT_USER, DELETE_USER } from "./types";

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        users = users.map(user => {
            const { id, name, email, phone, website } = user;
            return {
                id,
                name,
                email,
                phone,
                website
            };
        });
        dispatch({
            type: FETCH_USERS,
            payload: users
        });
    })
    .catch(err => console.log(err));
};

export const addEditUsers = (userData) => dispatch => {
    if (!userData[0].edit) {
        dispatch({
            type: ADD_USER,
            payload: userData
        });
    } else {
        dispatch({
            type: EDIT_USER,
            payload: userData
        });
    }
};

export const removeUsers = (usersNameArr) => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: usersNameArr 
    });
};
