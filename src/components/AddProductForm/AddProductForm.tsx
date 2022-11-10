import React, { useState } from 'react';

import categoriesFromServer from '../../api/categories';
import { ProductWithCategory } from '../../types/ProductWithCategory';

interface Props {
  onAddNewProduct: (product: ProductWithCategory) => void;
  generateProductId: () => number;
  generateCategoryId: () => number;
}

export const AddProductForm: React.FC<Props> = ({ onAddNewProduct, generateProductId, generateCategoryId }) => {
  const [productName, setProductName] = useState('');
  const [categoryId, setCategoryId] = useState(1);

  const getCategory = () => {
    return categoriesFromServer.find(category => category.id === categoryId);
  }

  const resetFields = () => {
    setProductName('');
    setCategoryId(1);
  }

  const submitProductForm = (event: React.FormEvent) => {
    event.preventDefault();

    const productId = generateProductId();
    const categoryId = generateCategoryId();

    onAddNewProduct({
      id: productId,
      name: productName,
      categoryId,
      category: getCategory() || null,
    })

    resetFields();
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
              value={categoryId}
              onChange={event => {
                setCategoryId(+event.target.value)
              }}
            >
              {categoriesFromServer.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
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
