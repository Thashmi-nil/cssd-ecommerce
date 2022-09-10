import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getOrders = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getOrders`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getPreviousOrders = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getPreviousOrders`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const setAsDelivered = (orderId) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/setAsDelivered/${orderId}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const setAsTake = (orderId) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/setAsTake/${orderId}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getMyOrders = (customerId) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getMyOrders/${customerId}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};