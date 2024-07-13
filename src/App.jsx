import './App.css'
import Nav from './components/nav/Nav'
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom'
import SinglePage from './routes/singlepage/SinglePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SinglePage/:id' element={<SinglePage />} />
      </Routes>
    </>
  )
}

export default App
