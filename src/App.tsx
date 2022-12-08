import React from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { AddProductForm } from './components/AddProductForm';
import { ProductTable } from './components/ProductTable';

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
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <AddProductForm addNewProduct={addNewProduct}/>
        <ProductTable products={ProductTable}/>

      </div>
    </div>
  );
};
