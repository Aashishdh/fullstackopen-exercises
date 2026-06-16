const Persons = ({ persons }) => {
  if (!Array.isArray(persons)) {
    return <p>No persons to show</p>
  }

  return (
    <ul>
      {persons.map(person => 
        <li key={person.id || person.name}>
          {person.name} {person.number}
        </li>
      )}
    </ul>
  )
}

export default Persons
