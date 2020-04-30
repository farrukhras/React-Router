import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom" 

export default function Shop() { 
    const [items, setItems] = useState([])

    // useEffect used the cinvention of defining the fucntion inside it self when the function is 
    // affecting a state inside the component. Otherwise it can be defined outside the useEffect().
    useEffect(() => {
        async function fetchItems() {
            const ans = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await ans.json()
            const slicedData = data.slice(0, 15)
            //console.log(slicedData)
            setItems(slicedData) // set the items state to the sliced data that is fetched from the API
        }

        fetchItems() // call the function
    }, [])

    return (
        <div>
            {items.map(obj => (
                <div>
                    <h3 key={obj.id}>
                    <Link to={`/shop/${obj.id}`} style={{color: 'black'}}>{obj.title}</Link>
                    </h3>
                </div>
            ))}
        </div>
    )
}
