import React from 'react'

import './App.css'
import Hero from './components/ui/custom/Hero'
import ChatbotWidget from './components/ui/ChatbotWidget'
import Footer from './view-trip/components/Footer'


function App() {

  return (
    <>
    {/* Hero */}
    <Hero/>
    {/* <div className="text-red-500">Test</div> */}
    {/* Floating Chatbot */}
      <ChatbotWidget />
    <Footer/>
    </>
  )
}

export default App
