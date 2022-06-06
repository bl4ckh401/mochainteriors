import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Product from './Product'
import { fetchProducts } from '../actions/Products'
import { addToCart } from '../actions/Cart'
import { connect } from 'react-redux'

const ProductList = (props) => {
    let productsCollection = _.map(props.products, (product, idx) => {
        return (
            <Product key={idx} product={product} addToCart={props.addToCart} />
        )
    })

    return (
        <div className='shop_page'>
            {productsCollection}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    }
}


export default (connect(mapStateToProps, { fetchProducts, addToCart })(ProductList)) 
