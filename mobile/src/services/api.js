import axios from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.237.67:3333/'
});

export default api;