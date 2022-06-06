import React, { useState } from 'react'
import toastr from 'toastr'
import PropTypes from 'prop-types'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

function ProductCard(props) {
    const [quantity, setQuantity] = useState(1)

    const handleAddCount = () => {
        if (quantity < this.props.product.quantity) {
            setQuantity({ quantity: quantity + 1 })
        }
    }

    function handleAddToCart() {
        props.addToCart(props.product, quantity)
        toastr.success(`Added <b>${props.product.name}</b> into shopping-cart.`)
    }

    return (
        <div className="catalogue_main">
            <div className="catalogue_img">
            </div>
            <div className="item_desc">
                <div className="item_div">
                    <p className="item_name">{props.product.title}</p>
                </div>
                <div className="item_div">
                    <h3 className="item_name">Ksh{props.product.price.toString()}</h3>
                </div>
                <div className="item_button">
                    <button className="add_to_cart" type='submit' onClick={() => handleAddToCart(props.product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default ProductCard