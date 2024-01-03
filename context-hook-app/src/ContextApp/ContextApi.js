import React,{createContext,useContext,useState} from 'react'
import axios from 'axios';

// step 1 create context
const ApiContext = createContext([]);

export const ContextApi = ({children}) => {
    const [apiResponse,setApiResponse]=useState();

  // logic 
    const fetchDat = async () => {
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const personsData = res.data;
        setApiResponse(personsData);
        console.log(personsData);
      }catch(e){
        console.log('----->error',e)
      }
    }


    // 2 api


    // const [apiRes,setApiRes] = useState();
    // const fetchDataId = async (id) => {
    //   try{
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     const personsData = res.data;
    //     setApiRes(personsData);
    //     console.log(personsData);
    //   }catch(e){
    //     console.log('----->error',e)
    //   }
    // }



    // useEffect(() => {
    //     fetchDat();
    //   }, []);

  return (
    //step 2 add provider for the created apicontext and pass the value for provider what we want 
    <ApiContext.Provider value={{apiResponse, fetchDat}}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () =>{
  return useContext(ApiContext)
}




