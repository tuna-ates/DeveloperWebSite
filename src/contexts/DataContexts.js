import {createContext, useState} from "react"
import { fakeData } from "../data/fakeData";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const [data,setData]=useState(fakeData);

    return <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
}