import React from "react";

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 8600 },
];

function Tablica() {
  return (
    <div>
      <h4>Список товаров</h4>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablica;