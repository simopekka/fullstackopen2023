const Person = ({person}) => (
    <>
      <p>{person.name} {person.number}</p>
    </>
  )

const Persons = ({ filtered }) => (
    <>
        {filtered.map((person) => 
            <Person key={person.id} person={person} />
        )}
    </>
)

export default Persons;