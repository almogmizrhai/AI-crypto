// app jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { SignupPage } from './pages/SignupPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { OnBoardingPage } from './pages/OnBoardingPage.jsx'
import { DashboardPage } from './pages/DashboardPage.jsx'
import { Navbar } from './cmps/Navbar.jsx'



export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/onboarding' element={<OnBoardingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}