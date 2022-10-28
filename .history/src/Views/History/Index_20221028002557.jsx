import React from 'react'
import "./Index.css"

export const Historic = () => {
    
  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>Historic</a></p>
        </nav>
        <section className="contents">
            <table>
                <thead className='head'>
                    <th>Break Time</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    <td>00:01:10</td>
                    <td>10/05/2022</td>
                </tbody>
            </table>
        </section>
    </div>
  )
}
