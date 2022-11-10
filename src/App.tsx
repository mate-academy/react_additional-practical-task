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
  const [quere, setQuere] = useState('');
  const [select, setSelect] = useState('Grocery');
  const [products, setProducts] = useState<ProductWithCategory[]>(productsWithCategories);

  const reset = () => {
    setSelect('Grocery');
    setQuere('');
  }
  const max = () => {
    Math.max(...(products.map(p => p.id))) + 1;
  }
  
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <AddProductForm
          title={quere}
          setQuere={setQuere}
          setSelect={setSelect}
          reset={reset}
        />
        <table
          className="table is-striped is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  ID
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Product
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Category
                </span>
              </th>
            </tr>
          </thead>

          <ProductTable products={products} />
        </table>
      </div>
    </div>
  );
};
