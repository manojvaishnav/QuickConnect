import React, { useEffect } from 'react'

//Initalzing the aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Filter from './pages/Filter'
import Error from './pages/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  //Initazlizing the aos
  useEffect(() => { AOS.init() }, [])
  return (
    <>
      <BrowserRouter >

        {/* Navbar Component  */}
        <Navbar />

        <Routes >
          {/* Pages Routes  */}
          <Route path='/' element={<Home />} ></Route>
          <Route path='/filter' element={<Filter />} ></Route>
          {/* <Route path='/workers' element={<Workers />} ></Route>
        <Route path='/admin' element={<Admin />} ></Route> */}

          {/* Validations Routes  */}
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/login' element={<Login />} ></Route>

          {/* Error Handling Page  */}
          <Route path='/*' element={<Error />} ></Route>

        </Routes>

        {/* Footer Component  */}
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App;