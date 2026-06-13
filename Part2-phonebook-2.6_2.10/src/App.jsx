import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addperson=(e)=>{
    e.preventDefault();
    // It display when we try to add same name as we set in name.
    if(persons.some(elem=>elem.name===newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameobject={name:newName}
    setPersons(persons.concat(nameobject))
    setNewName('')
  }



   const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {persons.map(person=><li key={person.name}>{person.name}</li>)}
      </ul>


      {/* Debugging helper */}
      <div>debug: {newName}</div>
    </div>
  )

}

export default App