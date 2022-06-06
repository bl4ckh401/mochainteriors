import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Step, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import toastr from 'toastr'

import Cart from '../pages/Cart'
import Shipping from '../components/Shipping'
import Billing from '../components/Billing'
import Confirmation from '../components/Confirmation'
import { removeFromCart, clearCart, placeOrder } from '../actions/Cart'
import { setShippingOptions } from '../actions/Shipping'
import { setBillingOptions } from '../actions/Billing'
import { TOASTR_OPTIONS } from '../constants/Common'
import { withRouter } from './Shop'
toastr.options = TOASTR_OPTIONS

function CartPage(props) {
    const [step, setStep] = useState(1)


    function nextStep() {
        setStep({ step: state.step + 1 })
    }

    function previousStep() {
        setStep({ step: state.step - 1 })
    }

    function submit() {
        if (!props.auth.isAuthenticated) {
            toastr.warning("You have to login first to make an order.")
            props.history.push('/account')
        } else {
            props.placeOrder(props.cart, props.shipping.data, props.billing.data)
            props.history.push('/')
        }
    }

    function handleRemoveItem(e, item) {
        e.stopPropagation()
        props.removeFromCart(item.id)
    }

    function showStep() {
        switch (state.step) {
            case 1:
                return <Cart
                    cart={props.cart}
                    nextStep={nextStep}
                    handleRemoveItem={handleRemoveItem}
                    clearCart={props.clearCart}
                />

            case 2:
                return <Shipping
                    shipping={props.shipping}
                    nextStep={nextStep}
                    previousStep={previousStep}
                    setShippingOptions={props.setShippingOptions}
                />

            case 3:
                return <Billing
                    billing={props.billing}
                    nextStep={nextStep}
                    previousStep={previousStep}
                    setBillingOptions={props.setBillingOptions}
                />

            case 4:
                return <Confirmation
                    cart={props.cart}
                    shipping={props.shipping}
                    billing={props.billing}
                    previousStep={previousStep}
                    submit={submit}
                />

            default:
                return
        }
    }
    return (
        <div>
            <Step.Group attached='top'>
                <Step active={state.step === 1}>
                    <Icon name='shopping cart' />
                    <Step.Content>
                        <Step.Title>Confirm items</Step.Title>
                    </Step.Content>
                </Step>

                <Step active={state.step === 2}>
                    <Icon name='truck' />
                    <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Choose your shipping options</Step.Description>
                    </Step.Content>
                </Step>

                <Step active={state.step === 3}>
                    <Icon name='payment' />
                    <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                    </Step.Content>
                </Step>

                <Step active={state.step === 4}>
                    <Icon name='info circle' />
                    <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                        <Step.Description>Verify order details</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>

            {showStep()}
        </div>
    )
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    shipping: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setShippingOptions: PropTypes.func.isRequired,
    setBillingOptions: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        shipping: state.shipping,
        billing: state.billing,
        auth: state.auth
    }
}


export default withRouter(connect(mapStateToProps, { removeFromCart, setShippingOptions, setBillingOptions, clearCart, placeOrder })(CartPage))