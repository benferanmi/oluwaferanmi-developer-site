import './App.css'
import {Routes, Route} from 'react-router-dom'
import IndexPage from './IndexPage.jsx'
import Layout from './Layout.jsx'


function App() {

  return (
    <>
      <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/' element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
