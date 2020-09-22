import axios from 'axios';

const url = process.env.NODE_ENV === 'development' ? "http://localhost:8001" : "https://tinderly-clone-backend.herokuapp.com/";

const instance = axios.create({
  baseURL: url
})

export default instance;