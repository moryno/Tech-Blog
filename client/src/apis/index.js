import axios from "axios";

export default axios.create({
  baseURL: "https://tech-blog-backend-server.herokuapp.com/api",
});
