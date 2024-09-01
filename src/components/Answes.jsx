import { useRef } from "react"

export default function Answers({ activeQuestion, selectedAnswer, handleSelectAnswer }) {
    const shuffledAnswers = useRef()
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...activeQuestion.answers]
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }
    return (
        <ul id="answers">
            {
                shuffledAnswers.current.map(answer => {
                    let cssClassName = ""
                    if (selectedAnswer.selectedAnswer === answer) {
                        cssClassName = "selected"
                        if (selectedAnswer.answerState) {
                            cssClassName = selectedAnswer.answerState
                        }
                    }
                    return (
                        <li key={answer} className="answer">
                            <button className={cssClassName} onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}