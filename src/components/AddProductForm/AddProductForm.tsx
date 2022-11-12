import React from 'react';
import { useState } from "react";
import categories from "../../api/categories";

type Props = {
  addNewProduct: (name: string, categoryId: number) => void,
};


export const AddProductForm: React.FC<Props> = ({ addNewProduct }) => {
  const [query, setQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const onHandleSelect = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    setSelectedCategoryId(+event.target.value);
  }

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimedQery = query.trim();

    if (trimedQery.length && selectedCategoryId) {
      addNewProduct(trimedQery, selectedCategoryId);
    }

    setQuery('');
    setSelectedCategoryId(0);
  };

  return (
    <form
      className="form"
      onSubmit={onHandleSubmit}
    >
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={selectedCategoryId}
              onChange={onHandleSelect}>
              <option value={0}>
                Please select category
              </option>

              {categories.map(({ id, title }) => (
                <option
                  key={id}
                  value={id}
                >
                  {title}
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
