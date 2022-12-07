import React, { ChangeEvent, useState } from "react";
import { Category } from "../../types/Category";
import categoriesFromServer from '../../api/categories';

type Props = {
  categories: Category[];
}

export const AddProductForm: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  return (
    <form className="form">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={name}
            onChange={(event) => (
              setName(event.target.value)
            )}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={category}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => (setCategory(event.target.value))}
            >
              {categoriesFromServer.map(category =>
                <option value={category.title} key={category.id}>
                  {category.title}
                </option>
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
  )
};
