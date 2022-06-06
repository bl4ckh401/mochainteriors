import axios from 'axios'
import toastr from 'toastr'

import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE } from '../constants/ActionTypes'
import { fetchProducts } from './Products'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

export const fetchOrdersRequest = () => {
    return {
        type: FETCH_ORDERS_REQUEST
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFailure = (error) => {
    return {
        type: FETCH_ORDERS_FAILURE,
        payload: error
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersRequest())
        axios.get('http://127.0.0.1:8000/cartorders/')
            .then((res) => {
                dispatch(fetchOrdersSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchOrdersFailure(err))
            })
    }
}

export const updateProduct = (productId, productData) => {
    return dispatch => {
        axios.put(`http://127.0.0.1:8000/cartproducts/${productId}/`, { category: productData.category, name: productData.name, price: productData.price, quantity: productData.quantity, image_url: productData.imageUrl })
            .then((res) => {
                toastr.success(`Product ${productData.name} updated successfully.`)
            })
            .catch((err) => {
                toastr.error(err)
            })
    }
}

export const addNewProduct = (productData) => {
    return dispatch => {
        axios.post('/http://127.0.0.1:8000/cartproducts/', { category: productData.category, name: productData.name, price: productData.price, quantity: productData.quantity, description: productData.description, image_url: productData.imageUrl })
            .then((res) => {
                toastr.success(`Product ${productData.name} added successfully.`)
                dispatch(fetchProducts())
            })
            .catch((err) => {
                toastr.error(err)
            })
    }
}

export const deleteProduct = (productId, productName) => {
    return dispatch => {
        axios.delete(`http://127.0.0.1:8000/cartproducts/${productId}`)
            .then((res) => {
                toastr.info(`Product ${productName} has been removed.`)
                dispatch(fetchProducts())
            })
            .catch((err) => {
                toastr.error(err)
            })
    }
}
