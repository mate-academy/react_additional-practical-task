import React from "react";
import { Category } from "../../types/Category";
import categoriesFromServer from '../../api/categories';

type Props = {
  categories: Category[];
}

export const AddProductForm: React.FC<Props> = () => {
  return (
    <form className="form">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={name}
            onChange={(event)}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select>
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
  )
};
