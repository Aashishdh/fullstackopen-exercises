import React, { useState } from 'react'
import Statistics from './Components/Statistics'
import Button from './Components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const all= good+neutral+bad;
  return (
    <div>
      <div className='m-6'>
        <h1 className='mb-4 font-bold text-3xl'>give feedback</h1>

        {/* we create custom button */}
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        {/* <button 
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
        </button> */}

        <h2 className='font-bold text-3xl'>Statistics</h2>
        {/* create separate statistics folder so i commet it to remember it */}
      {/* <p>good: {good}</p>
        <p>neutral: {neutral} </p>
        <p>bad: {bad} </p>
        <p>all: {all}</p>
        <p>average: {all > 0 ? (good * 1 + neutral * 0 + bad * -1) / all : 0}</p>
        <p>Positive: {all>0 ? (good / all) * 100:0}%</p>
  */}

        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App
