import React from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { ProductTable } from './components/ProductTable';



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

      <ProductTable products={productsFromServer}/>
      </div>
    </div>
  );
};
