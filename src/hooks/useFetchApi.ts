import { useEffect, useState } from "react";
import React from "react";
import axios, { AxiosResponse } from "axios";

export type useApiFetchType = {
  data: any,
  error: boolean,
  isLoading: boolean
}
const useApiFetch = ( url: string, value: string | undefined): useApiFetchType => {
 const [data, setData] = useState<any>("");
 const [error, setError] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);

 useEffect(() => {
   const getData = async (): Promise<any> => {
     try{
       setIsLoading(true);
       const response: AxiosResponse<any, any> = await axios.get(url+value);
       if(response?.data){
         setData(response?.data)
         
       } else{
         setError(true);
       }

     } catch(e) {
       setError(true);
     } finally{
       setIsLoading(false)
     }
   }

   if(url && value){
     getData();
   }
 }, [])

 return { data, error, isLoading}
}

export default useApiFetch;