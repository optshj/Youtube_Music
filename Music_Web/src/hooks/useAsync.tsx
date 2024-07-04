import { useReducer,useEffect } from "react";

interface State {
    loading: boolean;
    data: any;
    error: any;
}

function reducer(state: State, action: { type: string; data?: any; error?: any }) {
    switch(action.type){
        case "LOADING":
            return {
                loading:true,
                data:null,
                error:null
            }
        case "SUCCESS":
            return {
                loading:false,
                data:action.data,
                error:null
            }
        case "ERROR":
            return {
                loading:false,
                data:null,
                error:action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export default function useAsync(callback:()=>Promise<any>,deps:any[] = []){
    const [state,dispatch] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    })

    const fetchData = async () => {
        dispatch({type:"LOADING",data:null,error:null})
        try{
            const data = await callback();
            dispatch({type:"SUCCESS",data})
        }catch(e){
            dispatch({type:"ERROR",error:e})
        }
    }

    useEffect(()=>{
        fetchData();
    },deps)

    return [state,fetchData] as const;
}