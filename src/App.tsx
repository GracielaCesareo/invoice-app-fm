import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* TODO: Remove after test */}
      <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
        <h1 className="text-4xl font-bold">Tailwind + Vite = ⚡</h1>
      </div>
    </div>
  )
}

export default App
