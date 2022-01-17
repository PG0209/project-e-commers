/** @format */

import { ActionTypes } from "../Constants/action-types";

const intitialCategory = {
  categories: [ ],
};

export const productCategoryReducer = (state = intitialCategory, { type, payload }) => {
  switch (type) {
    case ActionTypes.PRODUCT_CATEGORIES:
      return  { ...state, categories: payload };
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = {}, { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return {...state, ...payload};
    default:
      return state;
  }
};

const initialProducts = {
  products: [],
};

export const productReducer = (state = initialProducts, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

 