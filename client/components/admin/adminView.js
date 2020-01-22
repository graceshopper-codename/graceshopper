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

// import React from 'react'
// import Users from './allUsers'
// import AdminAllProducts from './adminAllProducts'
// import {me} from '../../store/user'
// import {connect} from 'react-redux'

// class AdminView extends React.Component {

//   componentDidMount() {
//     this.props.me()
//   }

//   render() {
//     const user = this.props.user
//     console.log(user)

//     return (

//       {user.isAdmin ?
//       (<div>

//         <AdminAllProducts />
//         <Users />
//       </div>) : (<div>no access</div>)}

//     )
//   }
// }

// const mapStateToProps = state => ({
//   user: state.user
// })

// const mapDispatchToProps = dispatch => ({
//   me: () => dispatch(me())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AdminView)
