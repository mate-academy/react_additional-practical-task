import React, { useState } from "react";
import categories from "../../api/categories";
import { Product } from "../../types/Product";
import { ProductWithCategory } from '../../types/ProductWithCategory';

type Props = {
  onAdd: (product: ProductWithCategory) => void
  products: ProductWithCategory[]
};

export const AddProductForm: React.FC<Props> = ({ onAdd, products }) => {
  const [productName, setProductName] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [productNameError, setProductNameError] = useState<boolean>(false)
  const [selectedCategoryError, setSelectedCategoryError] = useState<boolean>(false)

  const getNewProductID = (prevProducts: Product[]) => {
    return Math.max(...prevProducts.map(product => product.id)) + 1;
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!productName) {
      setProductNameError(true);
    }

    if (!selectedCategory) {
      setSelectedCategoryError(true);
    }

    if (!productName || !selectedCategory) {
      return;
    }

    const newProduct = {
      id: getNewProductID(products),
      name: productName,
      categoryId: selectedCategory,
      category: categories.find(c => c.id === selectedCategory) || null,
    };

    onAdd(newProduct)
    setProductName('')
    setSelectedCategory(0)

  }

  return (
    <form
      className="form"
      onSubmit={handleFormSubmit}
    >
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="product name"
            value={productName}
            onChange={(event) => {
              setProductName(event.target.value)
              setProductNameError(false)
            }}
            
          />
          {productNameError && (
            <span className="error">Please enter a product name</span>
          )}
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={selectedCategory}
              onChange={(event) => {
                setSelectedCategory(+event.target.value)
                setSelectedCategoryError(false)
              }}
            >
              <option
                value='0'
                disabled
              >
                Choose a category
              </option>
              {categories.map(category => (
                <option value={category.id} key={category.id}>{category.title}</option>
              ))}
            </select>
          </div>
        </div>
        {selectedCategoryError && (
          <span className="error">Please choose a category</span>
        )}
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
