import axios from "axios";

const API = axios.create({
    baseURL: '127.0.0.1:3000',
    headers: {'Content-Type': 'application/json'}
})

export default API