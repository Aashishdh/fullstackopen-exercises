import { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number:'31-383746'},
    { name: 'Ram', number: '983884683' },
    { name: 'hari', number: '9867676445' },
    { name: 'Mary', number: '453234' }
  ]) 
  const [newName, setNewName] = useState('')
  // useState for number
  const [newNumber, setnewNumber] = useState('')

  // Usestate for filter 
   const [filter, setFilter] = useState('')

  const addPerson=(e)=>{
    e.preventDefault();
    // It display when we try to add same name as we set in name.
    if(persons.some(elem=>elem.name===newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameobject={name:newName,number:newNumber}
    setPersons(persons.concat(nameobject))
    setNewName('')
    setnewNumber('')
  }



   const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

   const handleNumberChange = (event) => {
    setnewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  
  }

  // filter persons case-insensitively
  const personsToShow = persons.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      {/* Created filter input 
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>*/}
      <Filter 
      filter={filter} handleFilterChange={handleFilterChange} 
      />
      <h3>Add a new</h3>
      {/* <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        //number input 
         <div>
          number: <input value={newNumber} onChange={handlenumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      {/* <ul>
        {personsToShow.map(person=><li key={person.name}>{person.name} {' '}{person.number}</li>)}
      </ul> */}
       <Persons persons={personsToShow} />
      {/* Debugging helper */}
      <div>debug: {newName}{newNumber}</div>
    </div>
  )

}

export default App