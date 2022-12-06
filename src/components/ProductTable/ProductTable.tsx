import React from "react";

import { Product } from '../../types/Product'

type Props = {
  products: Product[]
}

export const ProductTable: React.FC<Props> = ({ products }) => {

  return (
    <table
      className="table is-striped is-narrow is-fullwidth"
    >

      <thead>
        {products.map(product => (
          <tr>
            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                {product.category.title}
              </span>
            </th>
          </tr>
        ))}
      </thead>

      <tbody>
        {products.map(product => (
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
}
