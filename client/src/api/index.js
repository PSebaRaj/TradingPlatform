import axios from "axios";

const url = "http://localhost:3001/portfolio/"; // pointing to backend data

export const fetchData = () => axios.get(url);

export const createStock = (newStock) => axios.post(url, newStock);

export const updateStock = (id, updatedStock) =>
  axios.patch(`${url}/${id}`, updatedStock);

export const deleteStock = (id) => axios.delete(`${url}/${id}`);
