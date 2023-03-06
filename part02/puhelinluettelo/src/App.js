import { useState } from 'react'

const Persons = ({person}) => (
  <>
    <p>{person.name} {person.number}</p>
  </>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0400' }
  ]) 
  const [newName, setNewName] = useState(
    { name: '', number:'' }
    )

  const addName = (event) => {
    event.preventDefault()
    console.log(newName)

    const found = persons.find(person => person.name ===newName.name)
    if(found) {
      alert(`${newName.name} is already added to the phonebook`)
      setNewName({
        name:'', number:''
      })
      return
    }
    const nameObject = {
      name: newName.name,
      number: newName.number
    }
    setPersons(persons.concat(nameObject))
    setNewName({
      name:'', number:''
    })
    console.log(nameObject)
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName({...newName, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name:
          <input 
            name="name"
            value={newName.name}
            onChange={handleInputChange}
          />
        </div>
        <div>number:
          <input
            name="number"
            value={newName.number}
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
