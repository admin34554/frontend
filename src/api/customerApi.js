import axios from "axios";

const BASE_URL = "https://aadhi-store.onrender.com/api/v1/customer-master";

export const saveCustomer = async (data) => {
  return axios.post(BASE_URL, data);
};

export const getCustomerById = async (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};