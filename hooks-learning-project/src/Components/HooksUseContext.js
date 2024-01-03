import React,{useState} from 'react'

 function HooksUseContext1 () {
   
    const [user] = useState("Lara Laurando");

    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <HooksUseContext2 user={user} />
      </>
    );
  }
  
  function HooksUseContext2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <HooksUseContext3 user={user} />
      </>
    );
  }
  
  function HooksUseContext3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <HooksUseContext4 user={user} />
      </>
    );
  }
  
  function HooksUseContext4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <HooksUseContext5 user={user} />
      </>
    );
  }
  
  function HooksUseContext5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  
export default HooksUseContext1;
