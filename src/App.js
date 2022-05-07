import React, { useState } from 'react'
import './App.css';
import moneyPyramid from './dataMoney'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <div className='app'>
        <div className="main">
          <div className="top">
            <div className="timer">30</div>
          </div>
          <div className="bottom">Questions & Answers</div>
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