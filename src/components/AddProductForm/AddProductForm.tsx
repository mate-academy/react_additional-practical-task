import React, { useState } from 'react';

import { ProductWithCategory } from '../../types/ProductWithCategory';

interface Props {
  onAddNewProduct: (product: ProductWithCategory) => void;
  generateProductId: () => number;
  generateCategoryId: () => number;
}

export const AddProductForm: React.FC<Props> = ({ onAddNewProduct, generateProductId, generateCategoryId }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');

  const submitProductForm = () => {
    const productId = generateProductId();
    const categoryId = generateCategoryId();

    const newProduct = {
      id: productId,
      name: productName,
      categoryId,
      category,
    }

    onAddNewProduct({newProduct})
  }

  return (
    <form 
      className="form"
      onSubmit={submitProductForm}
    >
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={productName}
            onChange={event => setProductName(event.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
              onChange={event => setCategory(event.target.value)}
            >
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
  )
};
