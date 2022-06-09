import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../actions/Products'
import { addToCart } from '../actions/Cart'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductList from '../Component/ProductList'


function Shop(props) {

    useEffect(() => {
        props.fetchProducts()
    }, [])


    return (
        <div className='shop_page' id='shop'>
            <ProductList products={props.products} addToCart={props.addToCart} />
        </div>
    )
}
Shop.propTypes = {
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    }
}

export default (connect(mapStateToProps, { fetchProducts, addToCart })(Shop))