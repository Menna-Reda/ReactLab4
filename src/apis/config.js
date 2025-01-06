import axios from "axios";

const api_key = "50f1d533196bb57b9d729417fbd43927";
const axiosInstance = axios.create({
   baseURL: 'https://api.themoviedb.org/3'
});

export default axiosInstance; 