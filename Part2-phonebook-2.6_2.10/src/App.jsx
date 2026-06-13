import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number:'31-383746'}
  ]) 
  const [newName, setNewName] = useState('')
  // useState for number
  const [newNumber, setnewNumber] = useState('')

  const addperson=(e)=>{
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

   const handlenumberChange = (event) => {
    setnewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        {/* number input */}
         <div>
          number: <input value={newNumber} onChange={handlenumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {persons.map(person=><li key={person.name}>{person.name} {' '}{person.number}</li>)}
      </ul>


      {/* Debugging helper */}
      <div>debug: {newName}{newNumber}</div>
    </div>
  )

}

export default App