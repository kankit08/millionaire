import React, { useEffect, useState } from 'react'
import './quiz.css' 
// import data from '../questionAnswerData'
const Quiz = ({data, setTimeOut, questionNumber, setQuestionNumber}) => {

    const [question, setQuestion] = useState(null)

    useEffect(() => {
        setQuestion(data[questionNumber -1])
    }, [data, questionNumber])

  return (
    <div className='quiz'>
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) => (
                <div className="answer">{a.text}</div>
            ))}
        </div>
    </div>
  )
}

export default Quiz