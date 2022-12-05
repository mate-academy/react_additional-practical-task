import React from "react";
import { Product } from "../../types/Product";
import productsFromServer from '../../api/products';
import categoriesFromServer from '../../api/categories';
import { ProductWithCategory } from '../../types/ProductWithCategory';

type Props = {
  products: Product[],
}

const findCategoryById = (categoryId: number) => {
  const foundCategory = categoriesFromServer.find(category => (
    category.id === categoryId
  ));

  return foundCategory || null;
};

export const productsWithCategories: ProductWithCategory[] = productsFromServer.map(
  (product) => ({
    ...product,
    category: findCategoryById(product.categoryId),
  }),
);

export const ProductTable: React.FC<Props> = () => {

  return (
    <table
    className="table is-striped is-narrow is-fullwidth"
  >
    <thead>
      <tr>
        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            ID
          </span>
        </th>

        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            Product
          </span>
        </th>

        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            Category
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      {productsWithCategories.map(product => (
        <tr key={product.id}>
          <td className="has-text-weight-bold">
            {product.id}
          </td>
          <td>{product.name}</td>

          {product.category?.title && (
            <td>{`${product.category?.title} ${product.category?.icon}`}</td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
  )
};
