import React from "react";
import './ProductRow.component.css'

export default function ProductRow({ product, removeProduct }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.store}</td>
      <td>
        <button className="saveProduct" onClick={() => removeProduct(product.id)}>Delete</button>
      </td>
    </tr>
  );
}
