import React,{useState,useEffect} from 'react'

 function HookUseEffct ()  {
    // example 1
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

     // example 2
    const [count1, setCount1] = useState(0);

   const cleanUp= useEffect(() => {
      setTimeout(() => {
        setCount1((count2) => count2 + 1);
        console.log('rendered')
      }, 1000);

      return () => clearTimeout(cleanUp)
    },[]); // <- add empty brackets here
  
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>

        <h1>I've rendered {count1} times!</h1>
      </>
    );
}
export default HookUseEffct;
