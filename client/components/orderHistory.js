import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {orderHistory} from '../store/cart'

export class OrderHistory extends React.Component {
  componentDidMount() {
    // this.props.me()
    this.props.orderHistory()
  }
  render() {
    const orders = this.props.cart
    console.log(orders)
    return (
      <div>
        <h3>Order History:</h3>
        <h1>{this.props.user.email}</h1>
        {orders &&
          orders.map(order => (
            <div key={order.productId}>
              <h3>{order.productId}</h3>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  // me: () => dispatch(me()),
  orderHistory: () => dispatch(orderHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
