/*------axios------
Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
Client side support for protecting against XSRF*/

import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;