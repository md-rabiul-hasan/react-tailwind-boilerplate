import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-blue-500">
      <h1 className="text-3xl font-bold text-white">
        Hello, Tailwind with React!
      </h1>
    </div>
    </>
  )
}

export default App
