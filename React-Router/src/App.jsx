import React from 'react'
// import Navbar from './components/Navbar' 
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import Contact from './pages/Contact'
import Product from './pages/Product'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import ErrorPage from './components/ErrorPage'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout/>} >
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Route>
    )
  )

  return (
    <>

      <RouterProvider router= {router} />

      {/* <Navbar/> */}
        {/* <div className='flex items-center justify-center h-[90vh]' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div> */}
    </>
  )
}

export default App
