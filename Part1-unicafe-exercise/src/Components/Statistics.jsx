import React from 'react'
import StatisticLine from './StatisticLine';

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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${Positive} %`} />
    </div>
  )
}

export default Statistics
