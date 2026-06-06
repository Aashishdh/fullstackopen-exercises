import React from 'react'

const Statistics = ({ good, neutral, bad }) => {
    const all= good+neutral+bad;
    // statistics are only displayed if feedback has already been given
    if(all===0){
      return <p>No feedback given</p>
    }
    const average=all > 0 ? (good * 1 + neutral * 0 + bad * -1) / all : 0
    const Positive= all>0 ? (good / all) * 100:0
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {Positive} %</p>
    </div>
  )
}

export default Statistics
