import React, {useContext} from 'react'
import {UserContext} from './CreateContext'
export default function Page3() {
    const {name} = useContext(UserContext)
    return (
        <h1>Page 3 :  {name}</h1>
    )
}
