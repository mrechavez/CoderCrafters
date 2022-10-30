import {HashRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import LearnMore from './pages/learnMore/LearnMore'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Services from './pages/services/Services'
import FAQ from './components/FAQs'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='learnmore' element={<LearnMore/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='faqs' element={<FAQ/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App