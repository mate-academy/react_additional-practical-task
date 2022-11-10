// import React from 'react';

import { useState } from "react";

type Props = {
  onSubmit: (name: string, categoryId: number) => void;
};

export const AddProductForm: React.FC<Props> = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');

  return (
    <form
      className="form"
      onSubmit={() => {onSubmit}}
    >
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={productCategory}
              onChange={(e) => {
                setProductCategory(e.target.value);
              }}
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
