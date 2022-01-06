
import React, {useState} from 'react'

function FnUseStateWithObj() {
    const [name, setName] = useState({ firstName: '', lastName: ''})
    return (
        <div>
            <form>
                <input type="text" value={name.firstName}
                 onChange={(e) => setName({...name, firstName: e.target.value})}   
                />
                <input type="text" value={name.lastName}
                 onChange={(e) => setName({...name, lastName: e.target.value})}   
                />

                <h2>Your First Name - {name.firstName} </h2>
                <h2>Your Last Name - {name.lastName}</h2>
                <p>{JSON.stringify(name)}</p>
            </form>
        </div>
    )
}

export default FnUseStateWithObj
