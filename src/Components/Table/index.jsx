import React from 'react'

const JSON = [ 
    {
        "id": 1,
        "time": "00:02:10",
        "date": "10/09/2022"
    },
    {
        "id": 2,
        "time": "00:01:20",
        "date": "10/10/2022"
    },
    {
        "id": 3,
        "time": "00:03:20",
        "date": "10/11/2022"
    },
    {
        "id": 4,
        "time": "00:01:10",
        "date": "10/12/2022"
    }
]

export const Table = () => {
    const [data, setData] = React.useState(JSON)
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
        const sorted = [...data].sort((a , b) =>{
            if(a[col] > b[col]) return 1;
            if(a[col] < b[col]) return -1;
            return 0;
        });
        setData(sorted)
    }

  return (
    <table className='table talbe-bordered'>
        <thead>
            <th onClick={() => sortingNumber('time')}>Break Time</th>
            <th onClick={() => sortingNumber('date')}>Date</th>
        </thead>
        <tbody>
            { data.map((prop) => (
                <tr key={prop.id}>
                    <td>{prop.time}</td>
                    <td>{prop.date}</td>
                </tr>
            )) }
        </tbody>
    </table>
  )
}
