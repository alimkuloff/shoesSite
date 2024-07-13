import './App.css'
import Nav from './components/nav/Nav'
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom'
import SinglePage from './routes/singlepage/SinglePage'
import Cart from './routes/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SinglePage/:id' element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
