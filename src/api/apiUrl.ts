import axios from "axios";

const apiUrl = "https://challenge.crossmint.io/api/";
const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;