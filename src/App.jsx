import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import IconCard from './components/IconCard/IconCard'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Banner></Banner>
        <IconCard></IconCard>
        <ProductCard></ProductCard>
    </div>
  )
}

export default App
