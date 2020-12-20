import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-app-1ea78-default-rtdb.firebaseio.com/'
})

export default instance;