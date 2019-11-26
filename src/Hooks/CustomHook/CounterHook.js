import React , {useState, useEffect} from 'react'
let count = 1
const useCounterHook = () => {
    const [counter, updateCounter] = useState(0)
useEffect(()=>{
++count
console.log(count)
})
    const updateCounterValue = (newVal) => {
        updateCounter(newVal)
    }
    
return {counter, updateCounter: updateCounterValue, setCounyter: updateCounterValue }
}
export default useCounterHook