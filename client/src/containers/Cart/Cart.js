import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Container, Row } from 'reactstrap'

import merchantAction from '../../redux/actions/merchant.actions.js'

import CartTable from '../../components/Cart/CartTable.js'

class Cart extends Component {
  render() {
    const { cart, modal } = this.props
    return (
      <div className="cart-page">
        <Helmet>
          <title>Bonsai - My Cart</title>
        </Helmet>
        <Container>
          <h1>My Cart</h1>
          <Row>
            <CartTable cart={cart} modal={modal} />
          </Row>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  // getAllMerchants: () => dispatch(merchantAction.getMerchants()),
})

const mapStateToProps = state => ({
  cart: state.merchantReducer.cart,
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
