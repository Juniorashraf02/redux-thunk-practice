import { TOGGLE_BRANDS } from "../actionTypes/actionTypes";
import { TOGGLE_STOCKS } from './../actionTypes/actionTypes';

export const toggleBrands = (brandName) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brandName,
  };
};

export const toggleStocks = ()=>{
  return {
    type: TOGGLE_STOCKS,
  }
}
