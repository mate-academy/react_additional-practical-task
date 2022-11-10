import React, { useState } from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';
import { ProductTable } from './components/ProductTable';
import { AddProductForm } from './components/AddProductForm';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';

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
  const[products, setProducts] = useState<ProductWithCategory[]>(productsWithCategories);


  let biggestId = 0;

  productsWithCategories.forEach((cur) => {
    if (cur.id > biggestId) {
      biggestId = cur.id;
    }
  })

  const onSubmit = (name: string, categoryId: number) => {
    setProducts(
      [...products, {
        id: biggestId + 1,
        name,
        categoryId,
        category: findCategoryById(categoryId),
      }]
    )
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <AddProductForm onSubmit={onSubmit} />

        <ProductTable products={products} />
      </div>
    </div>
  );
};
