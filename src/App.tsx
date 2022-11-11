import React, { useState } from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';
// import { Category } from './types/Category';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { AddProductForm } from './components/AddProductForm';
import { ProductTable } from './components/ProductTable';

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
  const [products, setProducts] = useState<ProductWithCategory[]>(
    productsWithCategories
  );
  const [field, setField] = useState(categoriesFromServer[0].title);
  const [query, setQuery] = useState<string>('');

//   const filteredProducts = products.filter(product => {
//     switch (field) {
//       case 'Grocery':
//         return product.category.title === 'Grocery';
//       case 'Drinks':
//         return product.category.title === "Drinks";
//       case 'Fruits':
//         return product.category.title === "Fruits";
//     }
// })

  const handleSubmit = () => {
    const newId =
      products.sort((product1, product2) => product2.id - product1.id)[0].id +
      1;
    const newName = query;
    const newCategory = categoriesFromServer.find(
      (categoria) => categoria.title === field
    );
    // const newCategoryId = categoriesFromServer.find(
    //   (categoria) => categoria.title === field
    // )?.id;

    const newProduct = {
      id: newId,
      name: newName,
      category: newCategory,
      categoryId: newCategory?.id,
    };
    setProducts([...products, newProduct])
  };;

  const deleteProduct = (deleteId: number) => {
    const newProducts = products.filter((product) => product.id !== deleteId);
    setProducts(newProducts);
  };
  // const controllOption = (event:any) => {
  //   setField(event.target.value)
  // };

  // const controlInput = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setQuery(event.target.value)
  // };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <AddProductForm
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          setField={setField}
          query={query}
          field={field}
        />
        <ProductTable products={products} deleteProduct={deleteProduct} />
        {/* <table className="table is-striped is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">ID</span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">Product</span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">Category</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="has-text-weight-bold">{product.id}</td>
                <td>{product.name}</td>

                {product.category?.title && <td>{product.category?.title}</td>}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};
