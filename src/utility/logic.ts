import { Dispatch} from "redux";
import { UserDataType, userStorageKey } from "./data-structure";
import { StoreUsersActionType, storeUsersActionCmd } from "../redux-store/services/data-structure";

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
            const response = await fetch("https://run.mocky.io/v3/e694caac-3432-4e79-982c-7e010745fc32");
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
export {getAllUsers}



