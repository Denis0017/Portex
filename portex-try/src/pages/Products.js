import React from "react";

const products = ["Cumin Seed", "Red Pepper", "Ginger", "Turmeric", "Cardamom"];

const Products = () => (
  <div className="p-10">
    <h1 className="text-3xl font-bold">Our Products</h1>
    <ul className="mt-4">
      {products.map((product, index) => (
        <li key={index} className="text-lg mt-2">{product}</li>
      ))}
    </ul>
  </div>
);

export default Products;