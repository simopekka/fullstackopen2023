const Find = ({ countries, input }) => {
    const filtered = countries.filter((country) =>
    country.name.common.toUpperCase().includes(input.toUpperCase()))
    console.log(filtered)

    if (!input)
        return
    if (filtered.length < 10) {
        return(
            <>
                {filtered.map(country => 
                    <p key={country.name.common}>{country.name.common} </p>
                )}
            </>
        )
    } else {
        return (
        <p>Too many matches, specify another filter</p>
        )
    }
}

export default Find