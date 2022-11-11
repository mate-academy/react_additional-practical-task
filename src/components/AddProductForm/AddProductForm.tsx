import React from 'react';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setField: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  query: string;
  field: string;
};
export const AddProductForm: React.FC<Props> = ({
  setQuery,
  setField,
  handleSubmit,
  query,
  field,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={field}
              onChange={(event) => setField(event.target.value)}
            >
              {/* {categoriesFromServer.map((categoria) => (
                <option>{categoria.title}</option>
              ))} */}
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
          <button type="submit" className="button is-link">
            Submit
          </button>

        </div>
      </div>
    </form>
  );
};
