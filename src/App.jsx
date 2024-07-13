import './App.css'
import Nav from './components/nav/Nav'
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom'
import SinglePage from './routes/singlepage/SinglePage'
import Cart from './routes/Cart'
import Login from './components/auth/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SinglePage/:id' element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
