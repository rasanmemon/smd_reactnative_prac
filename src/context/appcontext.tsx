import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any | null>(null);
export const useAppContext = ()=> useContext(AppContext);

const AppContextProvider=({children}:any)=>{
    const [user,setUser]= useState({
        firstname:"rasan",
        lastname:"rafiq",
    })
    const [counter,setCounter]= useState(0);
    useEffect(()=>{
        
        AsyncStorage.getItem('context-counter').then(value=>{if(value)setCounter(Number(value))})
    })
    const updateCounter = (newValue:number)=>{
        setCounter(newValue);

        AsyncStorage.setItem('context-counter',newValue.toString());
    }
    return(
        <AppContext.Provider value={{user,counter,updateCounter}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;