import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blogs.jsx'
import Footer from './components/Footer.jsx'
import { Header } from './components/navigation/Header.jsx'
import Offers from './pages/Offers.jsx'
import PortfolioSlider from './components/pages/PortfolioSlider.jsx'
import CompletePortfolioPage from './components/CompletePortfolioPage.jsx'



function App() {

  return (
    <>
      <div className='block relative h-[130px]'>
        <Header />
      </div>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/prev' element={<CompletePortfolioPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/slider" element={<PortfolioSlider />} />
        </Routes>
      </main>
      <div className='footer_spacer'></div>
      <hr />
      <div className="container-pages">
        <Footer />
      </div>
    </>
  )
}

export default App

