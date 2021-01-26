import { useState } from 'react';
import axios from 'axios'; //peticiones http, cancelaciones htpp. libreria que remplaza al fetch
const BASE_URL = 'htpp://localhost:800'; //base a le que le haria un post(mi api) levantada con exprees.js

export const usePost = () => {
  const [response, setResponse] = useState(null);
  const [fetching, setfetching] = useState(false);

  const postData = async (endpoint, object) => {
    try {
      setfetching(true);
      const responseData = await axios.post(`${BASE_URL}/${endpoint}`, object);
      setResponse(responseData);
      setfetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  return [usePost, response, fetching];
};

export const useGet = () => {
  const [data, setData] = useState(null);
  const [fetching, setfetching] = useState(false);

  const getData = async (endpoint) => {
    try {
      setfetching(true);
      const responseData = await axios.get(`${BASE_URL}/${endpoint}`);
      setData(responseData);
      setfetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  return [getData, data, fetching];
};
