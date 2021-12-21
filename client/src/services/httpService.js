import axios from "axios";
import { toast } from "react-toastify";


// axios itercept any errors that may accured and will display a toast 
axios.interceptors.response.use(null, (err) => {
  const { response } = err;

  if (!response) {
    toast.error("Bad connection to server");
  }

  if (response && response.status >= 403) {
    toast.error("An unexpected error");
  }

  return Promise.reject(err);
});


// a function that sets a default header to any request being sent 
export function setDefaultCommonHeader(header, value) {
  axios.defaults.headers.common[header] = value;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  setDefaultCommonHeader,
};

export default httpService;
