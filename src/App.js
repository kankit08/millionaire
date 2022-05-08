import React, { useEffect, useState } from 'react'
import './App.css';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import moneyPyramid from './dataMoney'
import data from './questionAnswerData'
import Start from './components/Start';

const App = () => {
  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber-1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className='app'>
      {userName ? (
        <>
        <div className="main">
          {stop ? <h1 className='endText'>You Earned: {earned}</h1>: (
            <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
          </div>
          <div className="bottom">
              <Quiz 
                data={data} 
                setStop={setStop} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}/>
          </div>
          </>
          )}
        </div>
        <div className="pyramid">
            <ul className="moneylist">
              {moneyPyramid.map((m) => (
                <li className= {questionNumber === m.id ? "moneyListItem active":"moneyListItem"}>
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
                ))}
            </ul>
        </div>
        </>
      ): <Start setUserName={setUserName} />}   
    </div>
  )
}

export default App