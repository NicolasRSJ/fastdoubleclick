import React from 'react'
import { Table } from '../../Components/Table'
import "./Index.css"

export const Historic = () => {
    
  return (
    <div className="container">
        <nav className="navigation"> 
            <p><a href='/'>Stopwatch</a></p>
            <p><a href='/historic'>Historic</a></p>
        </nav>
        <section className="contents">
            <Table/>
        </section>
    </div>
  )
}
