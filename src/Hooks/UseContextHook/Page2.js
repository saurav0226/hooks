import React, {useContext} from 'react'
import {UserContext} from './CreateContext'
export default function Page2() {
    const {name} = useContext(UserContext)
    return (
        <h1>Page 2 :  {name}</h1>
    )
}
