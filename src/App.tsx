import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { AccountTypes } from './pages/AccountTypes'
import { Platform } from './pages/Platform'
import { About } from './pages/About'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account-types" element={<AccountTypes />} />
          <Route path="platform" element={<Platform />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
