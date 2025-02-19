import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/Error/Error'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<Error/>}/>
          </Routes>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App
