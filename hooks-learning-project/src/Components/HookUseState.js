import React,{useState} from 'react'

 function HookUseState () {
    const [detail,setName]=useState(
        {
            name:"bibi Khuteja",
            fname:'bibi',
            lname:'khuteja',
            gender:'female'

        }
    )

    const updateName = () => {
        setName(previousState => {
          return { ...previousState, fname: "blue" }
        });
      }

  return (
    <><h1>By using useState</h1>
        <h2> set to {detail.fname}</h2>
        <button type='button' onClick={updateName} >click button to change the name</button>
    </>
  )
}
export default HookUseState;