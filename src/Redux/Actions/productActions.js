import { ActionTypes } from "../Constants/action-types"

export const productCategories = (categories) => {
    return {
        type: ActionTypes.PRODUCT_CATEGORIES ,
        payload: categories,
    }
};
 
export const selctedCategory = (category) => {
    return {
        type: ActionTypes.SELECTED_CATEGORY,
        payload: category,
    }
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
};

