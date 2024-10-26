import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blogs.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import { Header } from './components/navigation/Header.jsx'


function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/prev' element={<Portfolio />} />
      </Routes>
      <div className='footer_spacer'></div>
      <hr />
      <div className="container-pages">
        <Footer />
      </div>
    </>
  )
}

export default App

