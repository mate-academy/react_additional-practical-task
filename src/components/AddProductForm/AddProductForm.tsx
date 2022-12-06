import React, { useState } from 'react';
import categories from '../../api/categories';

export const AddProductForm: React.FC = ({ visibleProducts }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  if (query.length > 0 && selectedCategory) {
    
  }

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
              {categories.map(category => <option>{category.title}</option>)}
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
