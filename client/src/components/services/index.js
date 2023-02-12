import axios from 'axios';

export const getAllProducts = async() => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}