import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <div className='m-6'>
        <h1 className='mb-4 font-bold text-3xl'>give feedback</h1>

        <button 
        onClick={()=>{setGood(good+1)}}
        className='mr-2 bg-blue-500 px-8 py-2 border-2 border-black'
        >
          good
        </button>

        <button
        onClick={()=>{setNeutral(neutral+1)}}
        className='mr-2 bg-green-500 px-8 py-2 border-2 border-black'
        >
          neutral
        </button>

        <button
        onClick={()=>{setBad(bad+1)}}
        className='px-8 py-2 border-2 border-black bg-yellow-500 mb-8'
        >
          bad
        </button>

        <h2 className='font-bold text-3xl'>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral} </p>
        <p>bad: {bad} </p>
      </div>
    </div>
  )
}

export default App
