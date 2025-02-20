import './App.css'
/* import Navbar from './components/Navbar/Navbar' */
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/pages/Error/Error'
import { CartProvider } from './context/CartContext'
import Cart from './components/pages/Cart/Cart'
import { SearchProvider } from './context/SearchContext'
import Checkout from './components/pages/Checkout/Checkout'
import Layout from './components/layaout/Layout'

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          {/* <Navbar/> */}
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categories/:id' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<Error/>}/>
            </Route>
          </Routes>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App
