import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RouteHandler from './routes/RouteHandler'

function App() {
  return (
    <div className='bg-[#151515] text-white'>
      <Header />
      <RouteHandler />
      <Footer />
    </div>
  )
}

export default App