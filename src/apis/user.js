import axiosClient from "../common/axiosClient";
import {useEffect} from "react";

const userApi = {
    getAll: (params) => {
        const url = 'user';
        return axiosClient.get(url,{params})
    },
    get: (id) => {
        const url = `user/${id}`;
        return axiosClient.get(url)
    }
}

export default userApi
