import axios from "axios";

const baseUrl = process.env.REACT_APP_API;


//post Request
export const postRequest = async (url, _obj) => {
  try {
    const saved = window.localStorage.getItem("data");
    const accesstoken = JSON.parse(saved);
    const header = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const data = await axios.post(baseUrl + url, _obj, header);
    return data;
  } catch (error) {
    return(error.response);
  }
};

//getRequest
export const getRequest = async (url) => {
  try {
    const saved = window.localStorage.getItem("data");
    const accesstoken = JSON.parse(saved);
    const header = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const data = await axios.get(baseUrl + url, header);
    return(data);
  } catch (error) {
    return(error.response);
  }
};

//patch request
export const updateRequest = async (url, _obj) => {
  try {
    const saved = window.localStorage.getItem("data");
    const accesstoken = JSON.parse(saved);
    const header = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const data = await axios.patch(baseUrl + url, _obj, header);
    return data;
  } catch (error) {
   return error.response
  }
};

