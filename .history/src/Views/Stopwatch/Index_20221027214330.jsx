import { set } from 'immer/dist/internal'
import React, { useState, useEffect } from 'react'
import "./Index.css"

export const Stopwatch = () => {

    const [ seconds, setSeconds ] = useState(0)
    const [ minute, setMinute ] = useState(0)
    const [ start, setStart ] = useState(false)

    useEffect(() => {
        if(seconds < 99) {
            for( let i=0; i <= 99; i++){
                setSeconds(i)
            }
        }
        if(seconds == 99) {
            setMinute(minute++)
        }
    }, [start])
    
  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>Historic</a></p>
        </nav>
        <section className="contents">
            <h1>
                <span>{("0" + (Math.floor(minute / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + (Math.floor(seconds / 1000) % 60)).slice(-2)}:</span>
            </h1>
            <button onClick={() => {setStart(true)}}>Click Me</button>
        </section>
    </div>
  )
}
