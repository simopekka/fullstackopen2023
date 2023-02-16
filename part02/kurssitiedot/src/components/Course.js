const Header = ({ name }) => (
    <h2>{name}</h2>
)


const Content = ({ parts }) => (
    <>
        <ul>
            {parts.map(part =>
                <Part key={part.id} name={part.name}/>
            )}
        </ul>
    </>
)

const Part = ({ name }) => {
    return (
        <li>{name}</li>
    )
}




const Course = ({ course }) => (
    <>
        <Header name={course.name}/>
        <Content parts={course.parts} />
    </>
)

export default Course