import React from 'react';
import { ProductWithCategory } from '../../types/ProductWithCategory';
type Props = {
  products: ProductWithCategory[];
  DeleteProduct: (deleteID: number) => void;
};

export const ProductTable: React.FC<Props> = ({ products, DeleteProduct }) => {
  return (
    <table className="table is-striped is-narrow is-fullwidth">
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
            <td>
              <button className="button is-link" onClick={DeleteProduct(product.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
