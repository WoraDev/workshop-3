import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [count, setCount] = useState(0)
  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!showPayment ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              React + Vite + Tailwind CSS v4
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Hello World! 🌟
            </h1>
            <p className="mt-2 text-slate-500">
              This is a React application with Tailwind CSS v4 properly installed using Vite.
            </p>
            
            <div className="mt-6">
              <div className="flex space-x-4 mb-4">
                <a href="https://vitejs.dev" target="_blank" className="flex-shrink-0">
                  <img src={viteLogo} className="h-8 w-8" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" className="flex-shrink-0">
                  <img src={reactLogo} className="h-8 w-8 animate-spin" alt="React logo" />
                </a>
              </div>
              
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 mb-4"
              >
                Count is {count}
              </button>

              <button 
                onClick={() => setShowPayment(true)}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Show Payment Form
              </button>
              
              <p className="mt-4 text-xs text-gray-500 text-center">
                Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-4 text-center">
            <button 
              onClick={() => setShowPayment(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              ← Back to Hello Page
            </button>
          </div>
          <Payment />
        </div>
      )}
    </div>
  )
}

export default App
