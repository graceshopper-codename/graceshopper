import React from 'react'
import Users from './allUsers'
import AdminAllProducts from './adminAllProducts'

export default class AdminView extends React.Component {
  render() {
    return (
      <div>
        <AdminAllProducts />
        <Users />
      </div>
    )
  }
}
