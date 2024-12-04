import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductLayouts from './components/product/ProductLayouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <ProductLayouts />
      <Footer />
    </>
  )
}

export default App
