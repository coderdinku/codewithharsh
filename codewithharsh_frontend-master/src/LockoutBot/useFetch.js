import React,{useState,useEffect} from 'react'

function useFetch(URL) {
  const [articles, setArticles] = useState(null)
  const abortCont = new AbortController();
  
  useEffect(() => {
   fetch(URL,{signal: abortCont.signal})
     .then(res => res.json())
     .then(
       (results) => {
         
         setArticles(results.result);
  
       })
       .catch(err=>{
           if(err.name ==="AbortError" ){
             console.log("Fetch Aborted")
           }
      
       })
   
 }, [URL])
 return articles
}

export default useFetch
