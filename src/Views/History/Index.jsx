import React from 'react'
import { Table } from '../../Components/Table'
import { resetTable } from '../../Redux/Actions'
import { Store } from '../../Redux/Store'
import "./Index.css"

const Historic = () => {
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

export default Historic;