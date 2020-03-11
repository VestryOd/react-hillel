import React, { Component } from "react";
import ProductRow from "./ProductRow";
import "./ProductTable.component.css";
import EmptyRow from "./EmptyRow";

class ProductTable extends Component {
  render() {
    const output = this.props.products.length === 0 ? <EmptyRow /> : this.props.products.map(el => {
      return (
        <ProductRow
          product={el}
          key={el.id}
          removeProduct={this.props.removeProduct}
        />
      );
    })
    return (
      <div className="table__wrapper">
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Store</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.props.products)}
            { output }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;