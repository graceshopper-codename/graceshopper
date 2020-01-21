import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../../store/products'

let defaultState = {
  title: '',
  type: 'Deckbuilding',
  description: '',
  price: '',
  MSRP: ''
}

class NewBoardGameForm extends Component {
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
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addProduct(this.state)
    this.setState(defaultState)
  }

  render() {
    return (
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
          {/* <input
            name="type"
            type="text"
            value={this.state.type}
            onChange={this.handleChange}
          /> */}
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
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: newGame => dispatch(addProduct(newGame))
})

export default connect(null, mapDispatchToProps)(NewBoardGameForm)
