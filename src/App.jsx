import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer userName="Guido" businessName="Bibliofilos"/>
    </>
  )
}

export default App
