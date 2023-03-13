const Country = ({ country }) => (
    <>
        <h2>{country.name.common}</h2>
        <p>{country.capital}</p>
        <h3>Languages:</h3>
        {Object.keys(country.languages).map(lang => 
            <li key={lang}>{country.languages[lang]}</li>
        )}
        <img src={country.flags.png} />
    </>
)
export default Country