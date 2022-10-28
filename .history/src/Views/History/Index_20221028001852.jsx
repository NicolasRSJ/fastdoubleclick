import React, { useState, useEffect } from 'react'
import "./Index.css"

export const Stopwatch = () => {
    
  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>Historic</a></p>
        </nav>
        <section className="contents">
            <table>
                <thead>
                    <th>Break Time</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    <td>00:01:10</td>
                    <td>10/05/2022</td>
                    <td>00:02:10</td>
                    <td>11/05/2022</td>
                </tbody>
            </table>
        </section>
    </div>
  )
}
