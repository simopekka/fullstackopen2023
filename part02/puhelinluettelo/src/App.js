import { useState } from 'react'

const Persons = ({person}) => (
  <>
    <p>{person.name}</p>
  </>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const found = persons.find(person => person.name ===newName)
    if(found) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('');
      return
    }
    const nameObject = {
      name: newName,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log(nameObject)
  }
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => 
        <Persons key={person.name} person={person} />
      )}
    </div>
  )

}

export default App
