import React, {useState} from "react";
import { categories } from '../../api/categories'

type Props = {
  addNewProduct: (
    name: string,
    categoryId: number,
  ) => void,
};

export const AddProductForm: React.FC<Props> = ({ addNewProduct }) => {
  const [query, setQuery] = useState('');
  const [selectByCategotyId, setSelectByCategotyId] = useState(0);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectByCategotyId(+event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
  };

  if (query.trim() && selectByCategotyId) {
    addNewProduct(query.trim(), selectByCategotyId);
  };

  return (
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
  );
};
