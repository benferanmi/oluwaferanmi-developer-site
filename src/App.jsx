import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blogs.jsx'
import Portfolio from './pages/Portfolio.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/prev' element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App

