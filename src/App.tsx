import React from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';

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
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <form className="form">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="product name"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>Grocery</option>
                  <option>Drinks</option>
                  <option>Fruits</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

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

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Remove
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {productsWithCategories.map(product => (
              <tr key={product.id}>
                <td className="has-text-weight-bold">
                  {product.id}
                </td>
                <td>{product.name}</td>

                {product.category?.title && (
                  <td>{product.category?.title}</td>
                )}

                <td>
                  <button
                    type="button"
                    className="button is-danger is-light"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
