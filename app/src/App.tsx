import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home }   from './pages/Home'
import { Teams }  from './pages/Teams'
import { About }  from './pages/About'
import { Blog }   from './pages/Blog'
import { Guides } from './pages/Guides'
import { Login }  from './pages/Login'
import { Signup } from './pages/Signup'

const authRoutes = ['/login', '/signup']

function Layout() {
  const { pathname } = useLocation()
  const isAuth = authRoutes.includes(pathname)

  return (
    <>
      {!isAuth && <Navbar />}
      <Routes>
        <Route path="/"        element={<Home />}   />
        <Route path="/teams"   element={<Teams />}  />
        <Route path="/about"   element={<About />}  />
        <Route path="/blog"    element={<Blog />}   />
        <Route path="/guides"  element={<Guides />} />
        <Route path="/login"   element={<Login />}  />
        <Route path="/signup"  element={<Signup />} />
      </Routes>
      {!isAuth && <Footer />}
    </>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}
