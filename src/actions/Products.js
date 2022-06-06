import axios from 'axios'

import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FILTER_PRODUCTS } from '../constants/ActionTypes'

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest())
        axios.get('http://127.0.0.1:8000/cartproducts/')
            .then((res) => {
                dispatch(fetchProductsSuccess(res.data))
                console.log("These products were fetched successfully:", res.data)
            })
            .catch((err) => {
                dispatch(fetchProductsFailure(err))
            })
    }
}

export const filterProducts = (products) => {
    return {
        type: FILTER_PRODUCTS,
        payload: products
    }
}
