import './App.css'
import { Routes, Route } from 'react-router-dom'

import Portfolio from './pages/Portfolio.jsx'
import Footer from './components/navigation/Footer.jsx'
import Home from './pages/Home.jsx'
import AuthPage from './pages/AuthPage.jsx'
import Contact from './pages/Contact.jsx'
import { Toaster } from 'react-hot-toast'
import Header from './components/navigation/Header.jsx'
import SubscriptionUpgrade from './pages/testing/pelbliss/SubscriptionUpgrade.jsx'
import PaymentSuccess from './pages/testing/pelbliss/PaymentSuccess.jsx'
import ImageKitUploadForm from './pages/testing/pelbliss/ImageKitUpload.jsx'
import MealTimetable from './pages/MealTimetable.jsx'

function App() {

  return (
    <main className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 w-full overflow-hidden block relative'>
      <Toaster />

      <div className='block relative h-[130px]'>
        <Header />
      </div>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/blogs' element={<Blog />} /> */}
          <Route path='/prev' element={<Portfolio />} />

          {/* //testing pages */}
          <Route path='/google-form' element={<AuthPage />} />
          <Route path="/auth/success" element={<AuthPage />} />
          <Route path="/auth/error" element={<AuthPage />} />
          <Route path='/upgrade' element={<SubscriptionUpgrade />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/testing/imagekit-upload' element={<ImageKitUploadForm />} />
          <Route path='/testing/meal-timetable' element={<MealTimetable />} />
          {/* <Route path="/offers" element={<Offers />} /> */}
        </Routes>
      </main>
      <div className='footer_spacer'></div>
      <hr />
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default App

