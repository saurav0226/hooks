import React, {useContext} from 'react'
import {UserContext} from './CreateContext'
export default function Page1() {
    const {name, setName} = useContext(UserContext)
    return (<>
        <h1>Page 1 :  {name}</h1>
        <button onClick={() => setName('Surbhi')}>Change name</button>
        </>
    )
}
