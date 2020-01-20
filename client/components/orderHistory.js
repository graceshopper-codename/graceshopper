import React from 'react'
import {connect} from 'react-redux'
import {orderHistory} from '../store/cart'

export class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.orderHistory()
  }
  render() {
    const orders = this.props.cart
    console.log(orders)
    return (
      <div>
        <h3>Order History:</h3>
        {orders &&
          orders.map(order => (
            <div key={order.productId}>
              <h3>Order Id: {order.orderId}</h3>
              <h4>Item: {order.productTitle}</h4>
              <h5>Cost: ${order.purchaseCost / 100}</h5>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  orderHistory: () => dispatch(orderHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
