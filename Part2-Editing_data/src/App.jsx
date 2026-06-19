import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log(response.data)
  //       setPersons(response.data)
  //     })
  // }, [])

    useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.some(elem => elem.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    // const nameObject = { name: newName, number: newNumber }
    const newPerson={name:newName, number:newNumber}
    personService.create(newPerson).then(elem=>{
      setPersons(persons.concat(elem))
      setNewName('')
      setNewNumber('')
    })
  }
  //   axios.post('http://localhost:3001/persons', nameObject)
  //   .then(response => {
      
  //   })
   
// Filter
  const personsToShow = persons.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase()) 
  )



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={(e) => setFilter(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={(e) => setNewName(e.target.value)}
        newNumber={newNumber}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App