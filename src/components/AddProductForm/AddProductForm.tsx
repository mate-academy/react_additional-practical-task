import { ProductWithCategory } from '../../types/ProductWithCategory';
import { Category } from '../../types/Category';
import { useState } from 'react';

type Props = {
  visibleProducts: ProductWithCategory[],
  categoriesFromServer: Category[],
  handleChangeInput: (value: string) => void;
  query: string;
  handleCategory: (value: number) => void;
  selectedCategory: number;
  handleSubmitButton: (event: MouseEvent) => 
}

export const AddProductForm: React.FC<Props> = ({
  categoriesFromServer, query, handleChangeInput, handleCategory, selectedCategory, handleSubmitButton,
}) => {

  return(
    <form className="form">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={query}
            onChange={(event) => (handleChangeInput(event.target.value))}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
            value={selectedCategory}
              onChange={(event) => (handleCategory(+event.target.value))}
            >
              {categoriesFromServer.map(category => (
                <option value={category.id} key={category.id}>{category.title}</option>
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
            onClick={handleSubmitButton}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
