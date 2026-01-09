import './App.css'
import { Routes, Route } from 'react-router-dom'

import Portfolio from './pages/Portfolio.jsx'
import Footer from './components/navigation/Footer.jsx'
import Home from './pages/Home.jsx'
import AuthPage from './pages/AuthPage.jsx'
import Contact from './pages/Contact.jsx'
import { Toaster } from 'react-hot-toast'
import Header from './components/navigation/Header.jsx'
import SubscriptionUpgrade from './pages/testing/pelbliss/ArchitectureDiagram.jsx'
import PaymentSuccess from './pages/testing/pelbliss/PaymentSuccess.jsx'
import ImageKitUploadForm from './pages/testing/pelbliss/ImageKitUpload.jsx'
import MealTimetable from './pages/MealTimetable.jsx'
import SaveHavenWebhookTester from './pages/testing/billpadi/SaveHavenWebhookTester.jsx'
import FlutterwaveCardTester from './pages/testing/billpadi/FlutterwaveCardTester.jsx'
import SkillsShowcase from './components/reuseable/SkillsShowcase.jsx'
import { skillArray } from './data/SkillData.jsx'
import ArchitectureDiagram from './pages/testing/pelbliss/ArchitectureDiagram.jsx'
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
          <Route path='/skills' element={<SkillsShowcase skillLength={skillArray.length} />} />

          {/* //testing pages */}
          <Route path='/google-form' element={<AuthPage />} />
          <Route path="/auth/success" element={<AuthPage />} />
          <Route path="/auth/error" element={<AuthPage />} />
          <Route path='/upgrade' element={<SubscriptionUpgrade />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/testing/imagekit-upload' element={<ImageKitUploadForm />} />
          <Route path='/testing/meal-timetable' element={<MealTimetable />} />
          <Route path="/testing/webhook" element={<SaveHavenWebhookTester />} />
          <Route path="/testing/card" element={<FlutterwaveCardTester />} />
          <Route path="/testing/art" element={<ArchitectureDiagram />} />
          {/* <Route path="/offers" element={<Offers />} /> */}
        </Routes>
      </main>
      <div className='footer_spacer'></div>
      <hr />
      {/* //maybe */}
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default App

