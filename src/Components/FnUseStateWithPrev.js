
import React from 'react'
import {useState} from 'react'

function FnUseStateWithPrev() {
    const initialState = 0;
    const [count, setcount] = useState(initialState)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setcount(prevState => prevState + 1)
        }
    }
    return (
        <div>
         <h1>Count {count}</h1>

         <button onClick={() => setcount(initialState)}>Reset</button>            
         <button onClick={()=> setcount((prevState)=> prevState + 1)}>Increment</button>            
         <button onClick={()=> setcount((prevState) => prevState - 1 )}>Descrement</button>            
         <button onClick={incrementFive}>Increment by 5</button>            
        </div>
    )
}

export default FnUseStateWithPrev
