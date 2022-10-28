import React, { useState, useEffect } from 'react'
import "./Index.css"

export const Stopwatch = () => {

    const [ secondsInitial, setSecondsInitial ] = useState(0)
    const [ minuteInitial, setMinuteInitial ] = useState(0)
    const [ secondsEnd, setSecondsEnd ] = useState(0)
    const [ minuteEnd, setMinuteEnd ] = useState(0)
    const [ start, setStart ] = useState(false)

    useEffect(() => {
        const Data = new Date()
        let currentMinute = Data.getMinutes();
        let currentSeconds = Data.getSeconds();  
        if(start) {
            setMinuteInitial(() => currentMinute)
            setSecondsInitial(() => currentSeconds)
        } else if (!start) {
            setMinuteEnd(() => currentMinute)
            setSecondsEnd(() => currentSeconds)
        }
        return
    },[])

  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>Historic</a></p>
        </nav>
        <section className="contents">
            <h1>
                
            </h1>
            <button onClick={() => {setStart(true)}}>Click Me</button>
        </section>
    </div>
  )
}
