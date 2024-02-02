import axios from 'axios'

// let baseURL = process.env.BASE_URL
const axios_custom = axios.create({
    baseURL: 'http://localhost:5000/api/v1/'
});

export default axios_custom
