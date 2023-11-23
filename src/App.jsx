import './App.css'
import {Routes, Route} from 'react-router-dom'
import IndexPage from './IndexPage.jsx'
import Layout from './Layout.jsx'
import Contact from './Contact/Contact'
import Blog from './Blogs'
import { Analytics } from '@vercel/analytics/react';


function App() {

  return (
    <>
      <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/' element={<Layout />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blogs' element={<Blog />} />
      <Analytics />
      </Routes>
    </>
  )
}

export default App
