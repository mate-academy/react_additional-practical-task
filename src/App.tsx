import React from 'react';
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

const visibleProducts = [...productsWithCategories];

export const App: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <AddProductForm visibleProducts={visibleProducts} categories={categoriesFromServer}/>

        <ProductTable productsWithCategories={productsWithCategories} />
      </div>
    </div>
  );
};
