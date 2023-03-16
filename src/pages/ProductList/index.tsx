import { useEffect, useState } from 'react'
import { ProductItemProps  } from '../../components/ProductListItem';
import { ProductTable } from '../../components/ProductTable';
import { api } from '../../lib/axios';
import { Container, HeaderContent } from "./styles";

export function ProductList() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ productsList, setProductsList ] = useState<ProductItemProps[]>([])
  
  async function fetchProducts() {
    setIsLoading(true)
    try {
      const response = await api.get('/products')
      setProductsList(response.data)

    } catch(error) {
      console.log(error)
      alert('Não foi possível carregar os produtos')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);
  
  return(
    <Container>
      <HeaderContent>
        <h1>Produtos</h1>
      </HeaderContent>
      <ProductTable productData={productsList}/>
    </Container>
  )
}