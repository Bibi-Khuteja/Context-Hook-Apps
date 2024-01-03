import React,{useState, createContext,useContext} from 'react'

const userContext =  createContext();
function HooksContextSimple () {

    const [user,setUser]=useState('Laura')
  return (
    <div>
        <userContext.Provider value={user}>
            <h2>{`Hello ${user}`}</h2>
            <HooksContextSimple1 />
        </userContext.Provider>
    </div>
  )
}

function HooksContextSimple1(){
    return(
        <>
            <h4>HookContext1</h4>
            <HooksContextSimple2/>
        </>
    )
}

function HooksContextSimple2(){
    return(
        <>
            <h4>HookContext2</h4>
            <HooksContextSimple3/>
        </>
    )
}


function HooksContextSimple3(){
    const user = useContext(userContext);
    return(
        <>
            <h4>HookContext3</h4>
            <h3>{`Hello again ${user}`}</h3>
        </>
    )
}
export default HooksContextSimple;
