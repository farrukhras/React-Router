import React, { useState, useEffect } from 'react'


export default function ItemDetail({ match }) { 
    
    const [item, setItem] = useState({})

    useEffect(() => {
        async function fetchItemDetail() {
            const ans_data = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`)
            const data = await ans_data.json()
            //console.log(data)
            setItem(data)
        }

        fetchItemDetail()
        //console.log(match)
    })
    
    return (
    <div>
        <h1>{item.title}</h1>
    </div>
  )
}
