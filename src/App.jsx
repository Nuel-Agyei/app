import { useState } from 'react'
import Features from './components/Features'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from '@sentry/react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
    </main>
    </>
  )
}

export default Sentry.withProfiler(App);
