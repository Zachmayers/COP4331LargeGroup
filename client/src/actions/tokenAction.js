import axios from 'axios';

export function getVerifyUser(token) {
    return dispatch => {
        console.log("put request");
        axios
        .put(`/api/users/verify/${token}`)
        .then(res => {})
        .catch(err => console.log(err));
    };
};
