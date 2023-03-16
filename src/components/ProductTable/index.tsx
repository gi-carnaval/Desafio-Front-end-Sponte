import { STable, STbody, SThead } from './styles'
import { ProductListItem } from '../ProductListItem';


export interface ProductItemProps {
  id: number,
  title: string,
  value: number,
  quantity: number,
  image: string,
  acquisitionDate: string
}
interface ListItemProps {
productData: ProductItemProps[]
}

export function ProductTable({ productData }: ListItemProps){

  return (
    
      <STable>
      <SThead>
        <tr>
          <td>Image</td>
          <td>Nome</td>
          <td>Valor</td>
          <td>Quantidade</td>
          <td>Data de Aquisição</td>
        </tr>
      </SThead>
      <STbody>
      {
        productData.map((product, index) => {
          return(
          <ProductListItem key={index} productData={product} />           
        )})
      }
        
      </STbody>
    </STable>   
  )
}
