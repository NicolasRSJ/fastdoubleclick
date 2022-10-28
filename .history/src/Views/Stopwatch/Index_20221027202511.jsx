import React, { useState, useEffect } from 'react'
import "./Index.css"

export const Stopwatch = () => {

    const [ time, setTimer ] = useState(0)
    const [ start, setStart ] = useState(false)

    useEffect(() => {
        let interval = null;

        if(start) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime + 10)
            }, 10);
        }else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [start])
    
    const HandlerButton = () => {
        if(start === false) {
            setStart(true)
        }else {
            setStart(false)
        }
    }

  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>History</a></p>
        </nav>
        <section className="contents">
            <h1>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + (time / 10) % 1000).slice(-2)}</span>
            </h1>
            <button onClick={() => <HandlerButton/>}>Start</button>
        </section>
    </div>
  )
}
