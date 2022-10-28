import React, { useState, useEffect } from 'react'
import "./Index.css"

export const Stopwatch = () => {

    const [ time, setTime ] = useState(0)
    const [ start, setStart ] = useState(false)

    useEffect(() => {
        let interval = null;

        if(start) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        }else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [start])
    
  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>Historic</a></p>
        </nav>
        <section className="contents">
            <h1>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
            </h1>
            <button onClick={() => {setStart(true)}}>Click Me</button>
        </section>
    </div>
  )
}
