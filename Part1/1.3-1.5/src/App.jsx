import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  const course = 'Half Stack application development'
  /*const part1 = { name: 'Fundamentals of React', exercises: 10 }
  const part2 = { name: 'Using props to pass data', exercises: 7 }
  const part3 = { name: 'State of a component', exercises: 14 }
  */

  // Putting all part into array instead of separate objects
 const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    /*<div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
    */

     <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
