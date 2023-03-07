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
  const [filter, setFilter] = useState()

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
    console.log(nameObject)
    axios
    .post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(nameObject))
      setNewName({
        name:'', number:''
      })
    })
  }

  const filtered = filter
        ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        : persons

  const filterInput = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName({...newName, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <Header text='Phonebook'/>
      <Filter filter={filter} handle={filterInput}/>
      <Header text='Add new'/>
      <Add addName={addName} newName={newName} handle={handleInputChange}/>
      <Header text='numbers'/>
      <Persons filtered={filtered}/>
    </div>
  )

}

export default App
