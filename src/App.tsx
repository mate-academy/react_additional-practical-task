import React, { useState } from 'react';
import './App.scss';
import categoriesFromServer from './api/categories';
import { ProductTable } from './components/ProductTable';
import { Product } from './types/Product';
import { Category } from './types/Category'
import { productsWithCategories } from './components/ProductTable/ProductTable'

export const App: React.FC = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [name, setName] = useState('');
  const [currProducts, setCurrProducts] = useState(productsWithCategories);

  const getNewProductID = (prevProducts: Product[]) => {
    return Math.max(...prevProducts.map(product => product.id)) + 1;
  };

  function getCategoryById(categoryId: number): Category | null {
    return categoriesFromServer.find(category => category.id === categoryId) || null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct = {
      id: getNewProductID(currProducts),
      name,
      categoryId,
      category: getCategoryById(categoryId),
    };

    setCurrProducts(currProducts => ([
      ...currProducts,
      newProduct,
    ]));

    setCategoryId(1);
    setName('');
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="product name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <div className="select">
                <select value={categoryId} onChange={(event) => setCategoryId(+event.target.value)}>
                  {categoriesFromServer.map(category =>
                    <option value={category.id} key={category.id}>{category.title}</option>
                  )}
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

        <ProductTable products={currProducts} />
      </div>
    </div>
  );
};
