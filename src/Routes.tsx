import { Routes, Route } from 'react-router-dom'
import ProductForm from './components/ProductForm'
import { ProductList } from './pages/ProductList'

export function RoutesApp() {
  return(
    
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route 
          path='/products/:id'
          element={
            <ProductForm edit /> 
          } />
        <Route 
          path='/products/new' 
          element={
            <ProductForm  /> 
          } />
        
      </Routes>
    
  )
}