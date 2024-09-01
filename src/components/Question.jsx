import { useState } from "react"
import QUESTIONS from "../constants/questions"
import Timer from "./Timer"
import Answers from "./Answes"

export default function Question({activeQuestionIndex, onSelectAnswer, handleSkipAnswer}) {
    const [selectedAnswer, setSelectedAnswer] = useState({
        selectedAnswer: '',
        answerState: null
    })

    const timeOutInterval = 10000
    const showSelectedAnswerInterval = 1000
    const showSelectedAnswerStateInterval = 2000
    const activeQuestion = QUESTIONS[activeQuestionIndex]

    function handleSelectAnswer(answer) {
        setSelectedAnswer((prevSelectedAnswers) => (
            {
                ...prevSelectedAnswers,
                selectedAnswer: answer
            }
        ))
        setTimeout(() => {
            setSelectedAnswer((prevSelectedAnswers) => {
                return {
                    ...prevSelectedAnswers,
                    answerState: answer === QUESTIONS[activeQuestionIndex].answers[0] ? 'correct' : 'wrong'
                }
        })
            setTimeout(() => {
                onSelectAnswer(answer)
            }, showSelectedAnswerStateInterval)
        }, showSelectedAnswerInterval)
    }
    
    return (
        <div id="question">
            <Timer timeOut={timeOutInterval} onTimeOut={selectedAnswer.selectedAnswer === '' ? handleSkipAnswer : null} />
            <h2>{activeQuestion.text}</h2>
            <Answers activeQuestion={activeQuestion} selectedAnswer={selectedAnswer} handleSelectAnswer={handleSelectAnswer}/>
        </div>
    )
}