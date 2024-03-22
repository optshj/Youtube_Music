import React,{createContext,useContext,useMemo,useState} from "react";

const SelectPublicValueContext = createContext<any>(null);
const SelectPublicActionContext = createContext<any>(null);

export default function SelectPublicProvider({children} : {children:React.ReactNode}){
    const [selectStatus,setSelectStatus] = useState(0); // 0:공개,1:일부공개,2:비공개
    const actions = useMemo(
        () => ({
            selectPublic() {
                setSelectStatus(0);
            },
            selectPartial(){
                setSelectStatus(1);
            },
            selectPrivate(){
                setSelectStatus(2);
            },
            init(){
                setSelectStatus(0);
            }
        }),[]
    )
    return(
        <SelectPublicActionContext.Provider value={actions}>
            <SelectPublicValueContext.Provider value={selectStatus}>
                {children}
            </SelectPublicValueContext.Provider>
        </SelectPublicActionContext.Provider>
    )
}
export function useDropdown() {
    const {selectPublic,selectPartial,selectPrivate,init} = useContext(SelectPublicActionContext);
    return {selectPublic,selectPartial,selectPrivate,init};
}
export function SelectStatus(){
    const selectStatus = useContext(SelectPublicValueContext);
    return selectStatus;
}