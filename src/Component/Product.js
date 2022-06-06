import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Card, Image, Rating, Grid, Header, Divider, Button, Input } from 'semantic-ui-react'
import toastr from 'toastr'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            modalOpen: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleMinusCount = this.handleMinusCount.bind(this)
        this.handleAddCount = this.handleAddCount.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalOnClose = this.handleModalOnClose.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleOnChange(e) {
        this.setState({ quantity: parseInt(e.target.value, 10) })
    }

    handleMinusCount() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    handleAddCount() {
        if (this.state.quantity < this.props.product.quantity) {
            this.setState({ quantity: this.state.quantity + 1 })
        }
    }

    handleModalOpen() {
        this.setState({ modalOpen: true })
    }

    handleModalOnClose() {
        this.setState({ quantity: 1, modalOpen: false })
    }

    handleAddToCart() {
        this.props.addToCart(this.props.product, this.state.quantity)
        this.handleModalOnClose()
        toastr.success(`Added <b>${this.props.product.name}</b> into shopping-cart.`)
    }

    render() {
        return (
            <div className=''>
                {
                    this.state.modalOpen ?
                        <div className='complete_product' >
                            <div>Product Details</div>

                            <div className='product_top'>
                                <div className='product_descreption'>
                                    <div className='product_details'>
                                        <div className='product_image'>
                                            <Image src={this.props.product.image_url} alt='img' />
                                        </div>

                                        <div className='product_data'>
                                            <div className=''>
                                                <h1 id='product-name' as='h1'>{this.props.product.name}</h1>
                                                <h2 id='price' as='h2'>${this.props.product.price}</h2>
                                                <div className='product_rating' id='rating'>
                                                    <Rating icon='star' defaultRating={this.props.product.rating} maxRating={5} disabled />
                                                </div>

                                                <div className='product_actions' id='quantity'>
                                                    <button style={{ backgroundColor: "#CD163E", width: 40, height: 40 }} onClick={this.handleMinusCount}>-</button>
                                                    <input style={{ height: 40, margin: 10, paddingRight: 10, paddingLeft: 10 }} value={this.state.quantity} onChange={this.handleOnChange} type="number"></input>
                                                    <button style={{ backgroundColor: "#44AABB", width: 40, height: 40 }} onClick={this.handleAddCount}>+</button>
                                                    <span>(In stock: {this.props.product.quantity})</span>
                                                </div>
                                                <p>{this.props.product.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product_btns'>
                                <Button
                                    primary={true}
                                    content='Add to cart'
                                    icon='add to cart'
                                    labelPosition='right'
                                    onClick={this.handleAddToCart}
                                />
                            </div>
                        </div >
                        :
                        <div className='product' onClick={this.handleModalOpen}>
                            <Image src={this.props.product.image_url} alt='img' centered rounded />
                            <div className='product_details'>
                                <div className=''>
                                    <h3>{this.props.product.name}</h3>
                                </div>

                                <div className=''>
                                    <h3>${this.props.product.price}</h3>
                                </div>
                            </div >

                            <div className='product_ratings'>
                                <Rating icon='star' defaultRating={this.props.product.rating} maxRating={5} disabled />
                            </div>
                        </div>
                }
            </div>

        )
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}


export default Product
