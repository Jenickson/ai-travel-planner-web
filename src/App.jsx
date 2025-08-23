import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/ui/custom/Hero'
import ChatbotWidget from './components/ui/ChatbotWidget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Hero */}
    <Hero/>
    {/* <div className="text-red-500">Test</div> */}
    {/* Floating Chatbot */}
      <ChatbotWidget />

    </>
  )
}

export default App
