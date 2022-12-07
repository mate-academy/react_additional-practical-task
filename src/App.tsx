import React from 'react';
import './App.scss';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';

import { ProductTable } from './components/ProductTable';
import { AddProductForm } from './components/AddProductForm';

export const App: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <AddProductForm categories={categoriesFromServer}/>

        <ProductTable products={productsFromServer}/>
      </div>
    </div>
  );
};
