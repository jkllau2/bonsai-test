import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Container, Nav, Row, Button } from 'reactstrap'

import merchantAction from '../../redux/actions/merchant.actions.js'

import MerchantCard from '../../components/MerchantCard/MerchantCard.js'
import CartTable from '../../components/Cart/CartTable.js'

class Dashboard extends Component {
  async componentDidMount() {
    const { getAllMerchants } = this.props
    await getAllMerchants()
  }

  handleAddToCart = (data) => {
    this.props.addToCart(data)
  }

  handleSaveAllCart = async () => {
    const { cart, saveAllCart } = this.props
    await saveAllCart({ payload: cart })
  }

  renderCart() {
    const { cart } = this.props
    return (
      <>
        <CartTable cart={cart} />
        <small>Note: Only unique merchant is added to the cart</small>
        <br />
        {cart.length > 0 && <Button onClick={this.handleSaveAllCart}>Save All Cart</Button>}
      </>
    )
  }

  render() {
    const { cart } = this.props

    return (
      <div className="dashboard-page">
        <Helmet>
          <title>Bonsai Dashboard</title>
        </Helmet>
        <Container>
          {cart.length > 0 && this.renderCart()}
          <h2>Dashboard</h2>
          <Row>
            <MerchantCard {...this.props} handleAddToCart={this.handleAddToCart} />
          </Row>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllMerchants: () => dispatch(merchantAction.getMerchants()),
  addToCart: (...args) => dispatch(merchantAction.addMerchantToCart(...args)),
  saveAllCart: (...args) => dispatch(merchantAction.saveAllCart(...args))
})

const mapStateToProps = state => ({
  merchants: state.merchantReducer.merchants,
  cart: state.merchantReducer.cart,
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
