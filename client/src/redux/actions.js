import { getAxios } from "../lib";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";


export const GET_ALL_ELECTRONICS = "GET_ALL_ELECTRONICS";
export const GET_ALL_JEWELERY = "GET_ALL_JEWELERY";
export const GET_ALL_MEN_CLOTHING = "GET_ALL_MEN_CLOTHING";
export const GET_ALL_WOMEN_CLOTHING = "GET_ALL_WOMEN_CLOTHING";

export const getAllProducts = () => {
  return async function (dispatch) {
    const data = await getAxios('https://fakestoreapi.com/products?limit=8')
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: data,
    })
  }
}

export const getProducts = (category) => {
  return async function (dispatch) {
    const data = await getAxios(`https://fakestoreapi.com/products/category/${category}`)
    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    })
  }
}

export const getAllElectronics = () => {
  return async function (dispatch) {
    const data = await getAxios('https://fakestoreapi.com/products/category/electronics')
    return dispatch({
      type: GET_ALL_ELECTRONICS,
      payload: data,
    })
  }
}



export const getAllJewelery = () => {
  return async function (dispatch) {
    const data = await getAxios('https://fakestoreapi.com/products/category/jewelery')
    return dispatch({
      type: GET_ALL_JEWELERY,
      payload: data,
    })
  }
}

export const getAllMenClothing = () => {
  return async function (dispatch) {
    const data = await getAxios(`https://fakestoreapi.com/products/category/men's clothing`)
    return dispatch({
      type: GET_ALL_ELECTRONICS,
      payload: data,
    })
  }
}

export const getAllWomenClothing = () => {
  return async function (dispatch) {
    const data = await getAxios(`https://fakestoreapi.com/products/category/women's clothing`)
    return dispatch({
      type: GET_ALL_WOMEN_CLOTHING,
      payload: data,
    })
  }
}