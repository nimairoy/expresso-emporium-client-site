
import { useLoaderData } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import IconCard from './components/IconCard/IconCard'
import ProductCard from './components/ProductCard/ProductCard'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div>
      <Banner></Banner>
      <IconCard></IconCard>
      <ProductCard
        coffees={coffees}
        setCoffees={setCoffees}
      ></ProductCard>
    </div>
  )
}

export default App
