import React,{useReducer} from 'react'

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


 function HooksUseReducer ()  {
    const [count,dispatch] = useReducer(reducer,initialValue)
  return (
    <>
    <div>This is the exapmle for UseReducer  Hook</div>
    <h3>Count {count}</h3>
    <button type="button" onClick={()=>dispatch('incre')}>Increment</button>
    <button type="button" onClick={()=>dispatch('decre')}>Decrement</button>
    <button  type="button" onClick={()=>dispatch('reset')}>Reset</button>
    </>
  )
}
export default HooksUseReducer;
