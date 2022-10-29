import React from 'react'
import { Store } from '../../Redux/Store' 

export const Table = () => {
    const [data, setData] = React.useState(() => {const value = Store.getState(); return value.INITIAL_STATE})
    const [order, setOrder] = React.useState("CRESCENTE")
    const sortingString = (col) => { /* ORDERNANDO PALAVRAS PELA PRIMEIRA LETRA */
        if(order === "CRESCENTE") {
            const sorted = [...data].sort((a , b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ?  1 : -1
            );
            setData(sorted);
            setOrder("DECRESCENTE");
        }
        if(order === "DECRESCENTE") {
            const sorted = [...data].sort((a , b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ?  1 : -1
            );
            setData(sorted);
            setOrder("CRESCENTE");
        }
    }

    const sortingNumber = (col) => { /* ORDENANDO NÚMEROS */
        const sorted = [...data].sort((a , b) => {
            if(a[col] > b[col]) return 1;
            if(a[col] < b[col]) return -1;
            return 0;
        });
        setData(sorted);
    }

  return (
    <table className='table talbe-bordered'>
        <thead>
            <th onClick={() => sortingNumber('time')}>Break Time</th>
            <th onClick={() => sortingNumber('date')}>Date</th>
        </thead>
        <tbody>
            { data.map((prop, index) => (
                <tr key={index}>
                    <td>
                        <span>{("0" + (Math.floor(prop.time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + (Math.floor(prop.time / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + (Math.floor(prop.time / 10) % 100)).slice(-2)}</span>
                    </td>
                    <td>{prop.date}</td>
                </tr>
            )) }
        </tbody>
    </table>
  )
}
