import axios from "axios";

const client = axios.create({
  baseURL: "http://api-nextcrm.nextcrm.vn/",
});

export default client;
