import React, { useState } from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

function App() {
  const[count,setCount]=useState(0);

  const addItem = () =>{
    setCount(count+1)
  }
  const removeItem = () =>{
    setCount(count-1)
  }

  return (
    <>
    <div className='Container'>
      <div className='row' > <Navigation count={count} /> </div>
      <div className='row'> <Header /> </div>
      <div className='row'> <Section count={count} addItem={addItem} removeItem={removeItem}/> </div>
      <div className='row'> <Footer /> </div>
    </div>
    </>
  )
}

export default App