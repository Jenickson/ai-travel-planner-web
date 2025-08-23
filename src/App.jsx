import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/ui/custom/Hero'
<<<<<<< HEAD
import ChatbotWidget from './components/ui/ChatbotWidget'
=======
>>>>>>> 05c253e0d9522c952f843cd8e02cb89875b959e0

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Hero */}
    <Hero/>
    {/* <div className="text-red-500">Test</div> */}
<<<<<<< HEAD
    {/* Floating Chatbot */}
      <ChatbotWidget />
=======

>>>>>>> 05c253e0d9522c952f843cd8e02cb89875b959e0
    </>
  )
}

export default App
