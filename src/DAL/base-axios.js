import * as axios from "axios";

let baseAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'ab2c1ce9-6b51-44a1-bc57-be1221c2c356'
    }
});

export default baseAxios;