import dayjs from 'dayjs'
import { formatCurrency } from '../../utils/format'
import { STrLink, SProductImage } from './styles'

export interface ProductItemProps {
    id: number,
    title: string,
    value: number,
    quantity: number,
    image: string,
    acquisitionDate: string
}
interface ListItemProps {
  productData: ProductItemProps
}

export function ProductListItem({ productData }: ListItemProps) {
  const acquisitionDate = dayjs(productData.acquisitionDate).format("DD/MM/YYYY");
  return (
    
      <tr key={productData.id}>
        <td>{productData.image ? <SProductImage src={productData.image} alt={productData.title} /> : null}</td>
        <td><STrLink  to={`/products/${productData.id}?edit=true`} >{productData.title}</STrLink></td>
        <td><STrLink  to={`/products/${productData.id}?edit=true`} >{formatCurrency(productData.value)}</STrLink></td>
        <td><STrLink  to={`/products/${productData.id}?edit=true`} >{productData.quantity}</STrLink></td>
        <td><STrLink  to={`/products/${productData.id}?edit=true`} >{acquisitionDate}</STrLink></td>
      </tr>
  )
}
