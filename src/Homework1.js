import React, { Component } from "react";
import Header from "./Components/Header";
import AddProductForm from "./Components/AddProductForm";
import ProductTable from "./Components/ProductTable";
import "./App.css";

class App extends Component {
  state = {
    products: [
      {
        id: "key01",
        name: "iPhone 7",
        category: "Smartphone",
        price: 199,
        store: 7
      },
      {
        id: "key02",
        name: "iPhone XR",
        category: "Smartphone",
        price: 699,
        store: 11
      },
      {
        id: "key03",
        name: "Xiaomi mi 9",
        category: "Smartphone",
        price: 270,
        store: 26
      },
      {
        id: "key04",
        name: "Samsung A6",
        category: "Smartphone",
        price: 350,
        store: 0
      },
      {
        id: "key05",
        name: "iPad 2019 Pro",
        category: "Tablet",
        price: 699,
        store: 4
      },
      {
        id: "key06",
        name: "Samsung Galaxy Tab",
        category: "Tablet",
        price: 549,
        store: 7
      },
      {
        id: "key07",
        name: "ASUS KX-553",
        category: "Laptop",
        price: 739,
        store: 2
      },
      {
        id: "key08",
        name: "Acer Nitro A-550",
        category: "Laptop",
        price: 1100,
        store: 4
      },
      {
        id: "key09",
        name: "Lenovo Thinkpad MR-15ed",
        category: "Laptop",
        price: 620,
        store: 14
      }
    ]
  };

  removeProduct = id => {
    console.log(id);
    let changes = this.state.products.filter(el => el.id !== id);
    this.setState({
      products: changes
    });
  };

  addProductToTable = newProduct => {
    const updateProducts = [
      ...this.state.products,
      {
        id: "key" + Math.round(Math.random() * 99),
        ...newProduct
      }
    ];
    this.setState({
      products: updateProducts
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ProductTable
          products={this.state.products}
          removeProduct={this.removeProduct}
        />
        <AddProductForm addProductToTable={this.addProductToTable} />
      </div>
    );
  }
}

export default App;