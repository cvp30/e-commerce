
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS,

  GET_ALL_ELECTRONICS,
  GET_ALL_JEWELERY,
  GET_ALL_MEN_CLOTHING,
  GET_ALL_WOMEN_CLOTHING,
} from './actions';

const initialState = {
  allProducts: [],
  products: [],

  allElectronics: [],
  allJewelery: [],
  allMen: [],
  allWomen: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      }

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }

    case GET_ALL_ELECTRONICS:
      return {
        ...state,
        allElectronics: action.payload,
      }

    case GET_ALL_JEWELERY:
      return {
        ...state,
        allJewelery: action.payload,
      }

    case GET_ALL_MEN_CLOTHING:
      return {
        ...state,
        allMen: action.payload,
      }

    case GET_ALL_WOMEN_CLOTHING:
      return {
        ...state,
        allWomen: action.payload,
      }

    default:
      return { ...state }
  }
}

export default reducer;