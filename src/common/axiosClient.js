import axios from "axios";
import queryString from "query-string";

const REACT_APP_API_URL = "https://60caa14f21337e0017e42bbe.mockapi.io/todolist/api/data/";
const axiosClient = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config)=>{
    return config;
});

axiosClient.interceptors.response.use((response)=>{
    if(response && response.data){
        return response.data;
    }
    return response;
},(error) => {
    throw error;
})

export default axiosClient
