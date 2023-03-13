import Country from './Country'
const Find = ({ countries, input }) => {
    const filtered = countries.filter((country) =>
    country.name.common.toUpperCase().includes(input.toUpperCase()))

    if (!input)
        return
    if (filtered.length < 10 && filtered.length > 1) {
        return(
            <>
                {filtered.map(country => 
                    <p key={country.name.common}>{country.name.common} </p>
                )}
            </>
        )
    } else if (filtered.length === 1){
        return (
            <Country country={filtered[0]} />
        )
    } else if (filtered.length > 10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
}

export default Find