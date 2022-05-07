import React, { useState } from 'react'
import './App.css';
import Quiz from './components/Quiz';
import moneyPyramid from './dataMoney'
import data from './questionAnswerData'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)

  return (
    <div className='app'>
        <div className="main">
          <div className="top">
            <div className="timer">30</div>
          </div>
          <div className="bottom">
              <Quiz 
                data={data} 
                setTimeOut={setTimeOut} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}/>
          </div>
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
    </div>
  )
}

export default App