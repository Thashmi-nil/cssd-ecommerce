import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getUsers = () => {
    return axios({
        method: "GET",
        url: USER_URL,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getProfile = (userName) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/users/${userName}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const updatePassword = (password, userName) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/changePassword/${userName}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: password,
    });
};

export const registerTrainer = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/registerTrainer`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};
