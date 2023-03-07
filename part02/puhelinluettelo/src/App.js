import { useState, useEffect } from 'react'
import Header from './components/Header'
import Add from './components/Add'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: '' },
  ])
  const [newName, setNewName] = useState(
    { name: '', number:'' }
    )
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])

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
      <Header text='Phonebook'/>
      <Filter />
      <Header text='Add new'/>
      <Add addName={addName} newName={newName} handle={handleInputChange}/>
      <Header text='numbers'/>
      <Persons persons={persons}/>
    </div>
  )

}

export default App
