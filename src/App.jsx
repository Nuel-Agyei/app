import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='bg-white'>
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
    </>
  )
}

export default App
