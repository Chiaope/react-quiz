import { useCallback, useState } from "react"
import QUESTIONS from "../constants/questions"
import Question from "./Question"
import Summary from "./Summary"


export default function Quiz() {
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const activeQuestionIndex = selectedAnswers.length

    const handleSelectedAnswers = useCallback(
        function handleSelectedAnswers(selectedAnswer) {
            setSelectedAnswers((prevSelectedAnswers) => ([...prevSelectedAnswers, selectedAnswer]))
        }, [])

    const handleSkipAnswer = useCallback(() => handleSelectedAnswers(null), [handleSelectedAnswers])
    if (activeQuestionIndex === QUESTIONS.length) {
        return <Summary selectedAnswers={selectedAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                activeQuestionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectedAnswers}
                handleSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}