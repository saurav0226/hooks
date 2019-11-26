import React, {useState, useMemo} from 'react'
import UserAge from './UseAge'
const User = () => {
    const [user, updateUser] = useState('Sam')
    const [count, updateCount] = useState('Sam')
    const [userAge, updateUserAge] = useState(20)
    const AgeMemo = useMemo(() => <UserAge userAge={userAge}/>,[count])
    return <>
        <h2>Name: {user}</h2>
        {AgeMemo}
    
        <button onClick={() => updateUser(user === "Saurav" ? 'Surbhi' : 'Saurav')}>Update Name</button>
        <button onClick={() => {
            updateCount(count+1)
            }}>Update count</button>
    <button onClick={() => updateUserAge(userAge+10)}>Update Age</button>
    </>

}
export default User