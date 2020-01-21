import React from 'react'
import {connect} from 'react-redux'
import {orderHistory} from '../store/cart'
import {sort} from './sortOrders'

export class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.orderHistory()
  }
  render() {
    const allOrders = this.props.cart
    console.log(allOrders)
    if (allOrders === null || allOrders.length === 0) {
      return <h3>No order history</h3>
    } else {
      const result = sort(allOrders)
      return (
        <div>
          <h3>Order History:</h3>
          {Object.keys(result).map(orders => (
            <div key={orders}>
              <h3>Order Id: {orders}</h3>
              {result[orders].map(order => (
                <div key={order}>
                  <h4>Item: {order.productTitle}</h4>
                  <h5>Cost: ${order.purchaseCost / 100}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  orderHistory: () => dispatch(orderHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
