import { useState } from 'react';

const Statistics = ( props ) => {
  console.log(props)
  const total = props.good + props.neutral + props.bad
  const average = (props.good * 1 + props.bad * -1) / total
  const positive = props.good/total * 100 + '%'
  return (
    <>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(1 / total)

  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage(average / total)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage((average - 1) / total )
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average}/>
    </div>
  );
}

export default App;
