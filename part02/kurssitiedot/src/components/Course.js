const Header = ({ name }) => (
    <h2>{name}</h2>
)


const Content = ({ parts }) => (
    <>
        <ul>
            {parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </ul>
    </>
)

const Part = ({ part }) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}

const Exercises = ({ parts }) => {
    const total = parts.reduce((s, p) => (s = s + p.exercises), 0)
    return (
        <p>number of exercises {total}</p>
    )
}


const Course = ({ course }) => (
    <>
        <Header name={course.name}/>
        <Content parts={course.parts} />
        <Exercises parts={course.parts} />
    </>
)

export default Course