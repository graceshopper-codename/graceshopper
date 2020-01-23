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
    console.log('ORDERS', allOrders)

    if (allOrders === null || allOrders.length === 0) {
      return <h3>No order history</h3>
    } else {
      const result = sort(allOrders)
      return (
        <div className="order-history-page">
          <div>
            <h2>Order History:</h2>
          </div>
          {Object.keys(result).map(orders => (
            <div className="order-individual" key={orders}>
              <div>
                <h3>Order Id: {orders}</h3>
              </div>
              {result[orders].map(order => (
                <div className="order-info" key={order}>
                  <div className="order-item">
                    <h4>Item: {order.productTitle}</h4>
                  </div>
                  <div>
                    <h5>Cost: ${order.purchaseCost / 100}</h5>
                  </div>
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
