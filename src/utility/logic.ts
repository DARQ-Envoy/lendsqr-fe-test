import { Dispatch} from "redux";
import { UserDataType, userStorageKey } from "./data-structure";
import { ElementStateType, StoreUsersActionType, setElementActionType, storeUsersActionCmd } from "../redux-store/services/data-structure";
import { setElementActionCreator } from "../redux-store/services/action-creators";
import { all } from "axios";
// const getAllUsers =function fetchUsers(url:string, setState:React.Dispatch<any>){
//     fetch(url)
//                         .then(res=>{
//                             let result;
//                             if(res.status == 200){
//                                 result = res.json()
//                                 return result;
//                             }
//                             else{
//                                 console.error(res.status)
//                             }
//                         }
//                             )
//                         .then(data=>{
//                             console.log(data);
//                             const result = data as UserDataType;
//                             setState(result)
//                         });
//                     } 

// export {getAllUsers}

const getAllUsers =()=>{
    return async function fetchUsers(dispatch:Dispatch<StoreUsersActionType>){
        try{
            const response = await fetch("https://run.mocky.io/v3/40425ba3-ce12-48f6-b302-5f6ef773d269");
            if(response.status == 200){
            const json:UserDataType = await response.json();
            const jsonData = JSON.stringify(json)
            localStorage.setItem(userStorageKey,jsonData)
            dispatch({
                type: storeUsersActionCmd,
                payLoad:json
            })
            }
            else{
                console.error(response.status)
            }
        }
        catch{
            alert("There was a problem fetching users.")
        }
    } 
}


const storeElement:(state:ElementStateType,element:HTMLElement, dispatch:Dispatch<setElementActionType>)=>any = (state,element, dispatch)=>{
    const allElements = Object.values(state.elements);
    const allId = allElements.map((el)=> el.id);
    const hasId = allId.includes(element.id);
    !hasId&&dispatch(setElementActionCreator({[element.id]: element}));        
}

export {getAllUsers, storeElement}


