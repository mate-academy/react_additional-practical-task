import React from 'react';

export const ProductTable: React.FC = ({ productsWithCategories }) => {
  return (
    <table
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>
            
            <span className="is-flex is-flex-wrap-nowrap">
              {}
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
            {productsWithCategories.name}
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
            {productsWithCategories.c}
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
              <td>{product.category?.title}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
};
