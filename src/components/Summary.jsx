import quizCompletedImage from "../assets/quiz-complete.png"
import QUESTIONS from "../constants/questions"

export default function Summary({selectedAnswers}) {
    console.log(selectedAnswers)
    const skippedAnswerList = selectedAnswers.filter((answer) => (answer === null))
    const correctAnswerList = selectedAnswers.filter((answer, index) => (answer === QUESTIONS[index].answers[0]))
    
    const skippedPercentage = Math.round((skippedAnswerList.length/selectedAnswers.length) * 100)
    const correctPercentage = Math.round((correctAnswerList.length/selectedAnswers.length) * 100)
    const wrongPercentage = 100 - skippedPercentage - correctPercentage

    return (
        <div id="summary">
            <img src={quizCompletedImage} alt="Trophy Icon" />
            <h2>Quiz Completed!!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedPercentage}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctPercentage}%</span>
                    <span className="text">Correct</span>
                </p>
                <p>
                    <span className="number">{wrongPercentage}%</span>
                    <span className="text">Wrong</span>
                </p>
            </div>
            <ol>
                {selectedAnswers.map((answer, index) => {
                    let cssClass = "user-answer"
                    if (answer === null) {
                        cssClass += ' skipped'
                    }
                    else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? "Skipped"}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}