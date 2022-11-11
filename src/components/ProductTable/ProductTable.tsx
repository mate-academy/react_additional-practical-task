import { ProductWithCategory } from '../../types/ProductWithCategory';

type Props = {
  visibleProducts: ProductWithCategory[],
}

export const ProductTable: React.FC<Props> = ({ visibleProducts }) => {

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
        {visibleProducts.map(product => (
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
