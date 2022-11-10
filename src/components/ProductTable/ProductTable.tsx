import { ProductWithCategory } from '../../types/ProductWithCategory';

type Props ={
  products: ProductWithCategory[];
}

export const ProductTable: React.FC<Props> = ({products}) => (
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
);
