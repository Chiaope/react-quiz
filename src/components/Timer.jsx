import { useEffect, useState } from "react"

export default function Timer({timeOut, onTimeOut, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeOut)
    const intervalDuration = 10

    useEffect(() => {
        const timer = setTimeout(onTimeOut, timeOut)
        return () => clearTimeout(timer)
    }, [onTimeOut, timeOut])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((currRemainingTime) => (currRemainingTime - intervalDuration))
        }, intervalDuration)
        return () => clearInterval(interval)
    }, [])


    return (<progress id="question-time" max={timeOut} value={remainingTime} mode={mode} /> )
}