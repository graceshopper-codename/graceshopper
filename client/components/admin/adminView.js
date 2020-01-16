import React from 'react'
import Users from './allUsers'
import AdminAllProducts from './adminAllProducts'

export class AdminView extends React.Component {
  render() {
    return (
      <div>
        <AdminAllProducts />
        <Users />
      </div>
    )
  }
}
