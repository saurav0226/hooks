import React, {useEffect} from 'react'
let color = 1
export default function UseAge({userAge}) {
    
    useEffect(() => {
        ++color
    })
    return (
        <div>
          Age:  {userAge} 
        <h1>{color}</h1>
        </div>
    )
}
