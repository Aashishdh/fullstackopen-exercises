import React from "react"
const Total = ({ parts }) => {
 const total = parts.reduce((sum, part) => {
  console.log('what is happening', sum, part)
  return sum + part.exercises
}, 0)
  return <p><strong>total of {total} exercises</strong></p>
}

export default Total