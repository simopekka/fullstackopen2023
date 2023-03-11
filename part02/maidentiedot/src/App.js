import { useState, useEffect } from 'react'
import Search from './components/Search'
import Find from './components/Find'

import countryService from './services/countries'

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        setCountries(response)
        console.log(response)
      })
      
  },[])

  const handleInputChange = (event) => {
    setInput(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div> 
      <Search value={input} handle={handleInputChange} />
      <Find countries={countries} input={input} />
    </div>
  )
}

export default App;
