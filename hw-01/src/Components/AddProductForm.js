import React, { Component } from "react";
import './AddProductForm.component.css'

class AddProductForm extends Component {
  state = {
    name: "",
    category: "",
    price: "",
    store: ""
  };

  setValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    let { addProductToTable } = this.props;
    event.preventDefault();
    addProductToTable(this.state);
  };

  render() {
    let { name, category, price, store } = this.state;
    return (
      <div className="wrapper form_wrapper">
        <form
          name="add-product"
          action=""
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="input-wrapper">
            <input
              name="name"
              placeholder="name"
              input type="text"
              value={name}
              onChange={this.setValue}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              name="category"
              placeholder="category"
              input type="text"
              value={category}
              onChange={this.setValue}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              name="price"
              placeholder="price"
              type="number"
              value={price}
              onChange={this.setValue}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              name="store"
              placeholder="store"
              type="number"
              value={store}
              onChange={this.setValue}
              required
            />
          </div>
          <div className="input-wrapper">
            <button>Add product</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddProductForm;