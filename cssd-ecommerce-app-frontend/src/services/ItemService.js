import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getItems = (item) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getItems`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const updateItem = (item) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/updateItem`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data:item
    });
};

export const addItem = (item,sellerid) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/addItem/${sellerid}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data:item
    });
};

export const removeItem = (id) => {
    return axios({
        method: "DELETE",
        url: `${USER_URL}/deleteItem/${id}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};