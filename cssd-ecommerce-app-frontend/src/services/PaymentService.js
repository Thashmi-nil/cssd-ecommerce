import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getAmount= (cartId) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getAmount/${cartId}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const makePayment= (cartId,amount,customerId) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/makePayment/${cartId}/${amount}/${customerId}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
