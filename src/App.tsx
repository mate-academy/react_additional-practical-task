import React, { useState } from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { ProductTable } from './components/ProductTable';
import { AddProductForm } from './components/AddProductForm';

const findCategoryById = (categoryId: number) => {
  const foundCategory = categoriesFromServer.find(category => (
    category.id === categoryId
  ));

  return foundCategory || null;
};

const productsWithCategories: ProductWithCategory[] = productsFromServer.map(
  (product) => ({
    ...product,
    category: findCategoryById(product.categoryId),
  }),
);

export const App: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState<ProductWithCategory[]>(productsWithCategories);
  const [selectedCategory, setselectedCategory] = useState(0);
  const [query, setQuery] = useState('');

  const handleChangeInput = (value: string) => {
    setQuery(value);
  };

  const handleCategory = (value: number) => {
    setselectedCategory(value);
  }

  const findCategory = categoriesFromServer.find(category => category.id === selectedCategory);

  const handleSubmitButton = (event: MouseEvent) => {
    event.preventDefault;

    const newProduct = {
      id: new Date(),
      name: query,
      categoryId: selectedCategory,
      category: findCategory,
    }

    return setVisibleProducts((currentProduct) => [...currentProduct, newProduct])
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <AddProductForm
         categoriesFromServer={categoriesFromServer}
          handleChangeInput={handleChangeInput}
          query={query}
          handleCategory={handleCategory}
          selectedCategory={selectedCategory}
          handleSubmitButton={handleSubmitButton}
         />
        <ProductTable visibleProducts={visibleProducts}/>
      </div>
    </div>
  );
};
