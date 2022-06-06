import axios from 'axios'
import jwtDecode from 'jwt-decode'
import toastr from 'toastr'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/ActionTypes'
import { fetchProducts } from './Products'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

export const loginRequest = (username) => {
    return {
        type: LOGIN_REQUEST,
        payload: username
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `JWT ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginRequest(username))
        axios.post('http://127.0.0.1:8000/api/token/', { username, password })
            .then((res) => {
                let token = res.data.token
                localStorage.setItem('token', token)
                setAuthorizationToken(token)
                dispatch(loginSuccess(jwtDecode(token)))
                toastr.success(`Logged in as <b>${username}</b>.`)
            })
            .catch((err) => {
                dispatch(loginFailure(err.response))
                if (err.response.status === 400 && err.response.data.non_field_errors[0] === 'Unable to log in with provided credentials.') {
                    toastr.error("Log in failed, please check your credentials again.")
                }
            })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token')
        setAuthorizationToken(false)
        dispatch(loginSuccess({}))
    }
}

export const renewAuthorizationToken = (token) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/api/token/refresh/', { token })
    }
}

export const checkAuthorizationToken = (token) => {
    return dispatch => {
        axios.post('/http://127.0.0.1:8000/api/token/refresh/', { token })
            .then((res) => {
                dispatch(renewAuthorizationToken(res.data.token))
            })
            .catch((err) => {
                if (err.response.status === 400 && err.response.data.non_field_errors[0] === 'Signature has expired.') {
                    dispatch(logout())
                    dispatch(fetchProducts())
                }
            })
    }
}

export const userSignupRequest = (userInfo) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/api/token/', userInfo)
            .then((res) => {
                toastr.success("Welcome! Your account is available now.")
            })
            .catch((err) => {
                if (err.response.status === 400 && err.response.data.username[0] === 'A user with that username already exists.') {
                    toastr.error("A user with that username already exists.")
                }
            })
    }
}

