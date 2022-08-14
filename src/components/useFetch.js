import { useState, useEffect } from "react";

export default function useFetch(url){

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    try{
      const response = await fetch(url);
      
      if(!response){
        throw Error('could not fetch the data for that resource');
      } else {
      const jsonData = await response.json();
      setIsPending(false);
      setData(jsonData);
      setErr(null);
      }
    }
    catch(err){
      setIsPending(false);
      setErr(err);
    }
  }

  useEffect(() => {
    fetchData()
  },[url]);

  return { data, isPending, err }
  
}

