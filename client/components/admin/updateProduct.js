import React from 'react'
import {updateProduct} from '../../store/products'
import {connect} from 'react-redux'

export class UpdateProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      type: '',
      description: '',
      price: '',
      MSRP: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidUpdate(prevProps) {
  //   // console.log(prevProps)
  //   if (this.props.state !== prevProps.state) {
  //     this.setState(this.props.state);
  //   }
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateProduct(this.state, this.props.match.params.id)

    this.setState({
      title: '',
      type: '',
      description: '',
      price: '',
      MSRP: ''
    })
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <form className="board-game-form" onSubmit={this.handleSubmit}>
            <label htmlFor="title"> Title: </label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="type"> Type: </label>
            <input
              name="type"
              type="text"
              value={this.state.type}
              onChange={this.handleChange}
            />
            <label htmlFor="description"> Description: </label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <label htmlFor="price"> Price: </label>
            <input
              name="price"
              type="text"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <label htmlFor="MSRP"> MSRP: </label>
            <input
              name="MSRP"
              type="text"
              value={this.state.MSRP}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProp = dispatch => ({
  updateProduct: (item, itemId) => dispatch(updateProduct(item, itemId))
})

export default connect(null, mapDispatchToProp)(UpdateProduct)
