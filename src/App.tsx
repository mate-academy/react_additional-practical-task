import React, { useState } from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { ProductTable } from './components/ProductTable';
import { AddProductForm } from './components/AddProductForm';

const findCategoryById = (categoryId: number) => {
  const foundCategory = categoriesFromServer.find(category => (
    category.id === categoryId
  ));

  return foundCategory || null;
};

const productsWithCategories: ProductWithCategory[] = productsFromServer.map(
  (product) => ({
    ...product,
    category: findCategoryById(product.categoryId),
  }),
);

export const App: React.FC = () => {
  const [products, setProducts] = useState(productsWithCategories);

  const addProduct = (product: ProductWithCategory) => {
    setProducts(prevProducts => ([
      ...prevProducts,
      product,
    ]));
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <AddProductForm
          onAdd={addProduct}
          products={products}
        />

        <ProductTable
          products={products}
        />
      </div>
    </div>
  );
};
