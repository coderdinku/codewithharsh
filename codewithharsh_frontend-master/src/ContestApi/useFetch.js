import React,{useState,useEffect} from 'react'

function useFetch(URL) {
  const [contests, setContests] = useState(null)
  const abortCont = new AbortController();
  
  useEffect(() => {
   fetch(URL)
     .then(res => res.json())
     .then(
       (results) => {
     
         setContests(results);
     
       })
       .catch(err=>{
         
             console.log("1 Fetch Aborted")
         
       })
      
 }, [URL])
 return contests
}

export default useFetch
