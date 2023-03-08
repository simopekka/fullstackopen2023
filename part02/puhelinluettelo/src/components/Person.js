

const Persons = ({ persons, filter, deleteUser }) => {

  const filtered = persons.filter((person) =>
    person.name.toUpperCase().includes(filter.toUpperCase()))
    console.log(filtered)
    
  return(
    <>
        {filtered.map(person => 
            <p key={person.id}>{person.name} {person.number}
              <button onClick={() => deleteUser(person.id)}>delete</button>
            </p>
        )}
    </>
)
}

export default Persons;