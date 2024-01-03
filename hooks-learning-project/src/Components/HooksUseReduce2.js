import React,{useReducer} from 'react'
// this is the example for multiple useReducers by using same reducers
const initialValue = 0;
const reducer = (state,action)=>{
    switch (action){
        case 'incre':
        return state + 1
        case 'decre':
            return state - 1
        case 'reset':
            return initialValue
        default :
        return initialValue
    }
}


 function HooksUseReduce2 ()  {
    const [count,dispatch] = useReducer(reducer,initialValue)
    const [countTwo,dispatchTwo] = useReducer(reducer,initialValue)
  return (
    <>
    <div>This is the exapmle for UseReducer  Hook</div>
    <h3>Count {count}</h3>
    <button type="button" onClick={()=>dispatch('incre')}>Increment</button>
    <button type="button" onClick={()=>dispatch('decre')}>Decrement</button>
    <button  type="button" onClick={()=>dispatch('reset')}>Reset</button>

    <h3>CountTwo {countTwo}</h3>
    <button type="button" onClick={()=>dispatchTwo('incre')}>Increment</button>
    <button type="button" onClick={()=>dispatchTwo('decre')}>Decrement</button>
    <button  type="button" onClick={()=>dispatchTwo('reset')}>Reset</button>
    </>
  )
}
export default HooksUseReduce2;
