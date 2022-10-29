import React, { useState, useEffect } from 'react'
import { addTime } from '../../Redux/Actions';
import { Store } from '../../Redux/Store';
import "./Index.css"
 
const Stopwatch = () => {

    const [ time, setTime ] = useState(0);
    const [ start, setStart ] = useState(false);

    useEffect(() => {
        let interval = null;
        const date = new Date
        const currentdate = `${date.getDate()}/${date.getUTCMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        if(start) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        }else{
            clearInterval(interval);
            if( time !== 0 ) {
                Store.dispatch(addTime({time: time, date: currentdate}))
            }
            setTime(0)
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
                <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</span>
            </h1>
            <button onClick={() => start ? setStart(false) : setStart(true)}>Click Me</button>
        </section>
    </div>
  )
}


export default Stopwatch;