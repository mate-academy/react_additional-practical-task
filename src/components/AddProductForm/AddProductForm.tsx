import React from 'react';
import { useState } from "react";
import categories from "../../api/categories";

type Props = {
  addNewProduct: (name: string, categoryId: number) => void,
};


export const AddProductForm: React.FC<Props> = ({ addNewProduct }) => {
  const [query, setQuery] = useState('');
  const [categorySelected, setCategorySelected] = useState(0);

  const onHandleSelect = (event: ) => {
    setCategorySelected(+event.target.value)
  }

  return (
    <form className="form">
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
            <select onChange={onHandleSelect}>
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
