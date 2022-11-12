import React, { useState } from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';
import { ProductTable } from './components/ProductTable';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
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
  const [products, setProducts] = useState<ProductWithCategory[]>(productsWithCategories);

  const getLargestId = () => {
    return Math.max(...products.map(({ id }) => id));
  };

  const addNewProduct = (
    name: string,
    categoryId: number,
    ) => {
    const newProduct = {
      id: getLargestId() + 1,
      name,
      categoryId,
      category: findCategoryById(categoryId),
    }

    setProducts(currProducts => [...currProducts, newProduct]);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <AddProductForm addNewProduct={addNewProduct}/>

        <ProductTable products={products}/>
      </div>
    </div>
  );
};
