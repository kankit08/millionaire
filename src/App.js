import React from 'react'
import './App.css';
import moneyPyramid from './dataMoney'

const App = () => {
  
  return (
    <div className='app'>
        <div className="main">main</div>
        <div className="pyramid">
            <ul className="moneylist">
              {moneyPyramid.map((m) => (
                <li className="moneyListItem">
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