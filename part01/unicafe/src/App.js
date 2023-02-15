import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  console.log(text, value)
  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  console.log(good, neutral, bad)
  const total = good + neutral + bad
  const average = (good * 1 + bad * -1) / total
  const positive = good/total * 100 + '%'

  if (total === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }
  return (
    <table>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='total' value={total}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive}/>
    </table>
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

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h2>give feedback</h2>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      <br/>
        <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
