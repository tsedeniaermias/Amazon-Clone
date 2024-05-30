import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-482b5/us-central1/api",

  // deployed version of firebase function
  baseURL: "https://api-lesrc572pq-uc.a.run.app/",

  // deployed version of amazon server on render 
  // baseURL: "https://amazon-api-deploy-ohd9.onrender.com/"
});

export { axiosInstance };
