import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/navigation/Header.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Footer from './components/navigation/Footer.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

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
          {/* <Route path='/blogs' element={<Blog />} /> */}
          <Route path='/prev' element={<Portfolio />} />
          {/* <Route path="/offers" element={<Offers />} /> */}
        </Routes>
      </main>
      <div className='footer_spacer'></div>
      <hr />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App

