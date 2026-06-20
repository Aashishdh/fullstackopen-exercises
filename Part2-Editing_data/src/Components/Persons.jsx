const Persons = ({ persons,handleDelete }) => {
  if (!Array.isArray(persons)) {
    return <p>No persons to show</p>
  }


  return (
    <ul>
      {persons.map(person => 
        <li key={person.id || person.name}>
          {person.name} {person.number}
           <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
        </li>
      )}
    </ul>
  )
}


export default Persons
