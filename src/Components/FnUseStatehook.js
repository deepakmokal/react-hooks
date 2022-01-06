import React from 'react';
import { useState } from 'react';

function FnUseStatehook() {
    const [count, setcount] = useState(0)
    return (
        <div>
            <button onClick={() => setcount(count + 1)}>Count {count}</button>    
        </div>
    )
}

export default FnUseStatehook
