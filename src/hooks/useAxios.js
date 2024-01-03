import axios from "axios";
import { useContext, useState } from "react"
import { DataContext } from "../contexts/DataContexts";

export const REQ_TYPE={
    GET:"get",
    POST:"post",
    PUT:"put",
    DELETE:"delete"
}
const useAxios=()=>{
    const {data,setData}=useContext(DataContext)
    const [loading,setLoading]=useState(false);
    const [err,setErr]=useState("")

    const instance = axios.create({
        baseURL: 'https://reqres.in/api/',
        timeout: 1000,
      });

    const doReg=({regType=REQ_TYPE.GET,endPoint,payload})=>{
        setLoading(true)
      instance[regType](endPoint,payload)
      .then((res)=>{
        setLoading(false)
        console.log("newData",res.data);
        setData(res.data)
      })
      .catch((err)=>{
        setErr(err.message)
        console.log("error varrrrr");
      })
    }
  return[doReg,data,loading,err];
}

export default useAxios;