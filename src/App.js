import React from 'react';
import UseCallbackHookExample from './Hooks/useCallbackHook'
import UseContextExample from './Hooks/UseContextHook/Example.component'
import User from './Hooks/USeMemo/useMemo';
import useCounterHook from './Hooks/CustomHook/CounterHook'
// Keeps track of all created functions during the app's life 
const functions = new Set();

const App = () => {
  const {counter, updateCounter, setCounyter} = useCounterHook()


  return (<div>
    <UseCallbackHookExample />
    <UseContextExample />
    <User />
    <h1>{counter}
    <button onClick={() => updateCounter(counter+1)}>Update Counter</button>
    <button onClick={() => setCounyter(counter+1)}>setCounyter Counter</button>
    </h1>
    
  </div>)
}

export default App