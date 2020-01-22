import React from 'react'
import {updateProduct} from '../../store/products'
import {connect} from 'react-redux'

export class UpdateProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      type: 'Deckbuilding',
      description: '',
      price: '',
      MSRP: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateProduct(this.state, this.props.id)

    this.setState({
      title: '',
      type: 'Deckbuilding',
      description: '',
      price: '',
      MSRP: ''
    })
  }

  render() {
    console.log(this.props)
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
            <select
              name="type"
              type="text"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <option value="Deckbuilding">Deckbuilding</option>
              <option value="Strategy">Strategy</option>
              <option value="Family">Family</option>
              <option value="Party">Party</option>
              <option value="Cooperative">Cooperative</option>
            </select>
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

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id
})

const mapDispatchToProp = dispatch => ({
  updateProduct: (item, itemId) => dispatch(updateProduct(item, itemId))
})

export default connect(mapStateToProps, mapDispatchToProp)(UpdateProduct)
