import React,{useState} from 'react'
import {UserContext} from './CreateContext'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


const ExampleUseContext = () => {
const [name, setName] = useState('saurav')
return <UserContext.Provider value={{name, setName}}>
        <Page1 />
        <Page2 />
        <Page3 />
</UserContext.Provider>

}

export default ExampleUseContext