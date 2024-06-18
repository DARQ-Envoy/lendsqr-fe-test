import type { SetElementActionCreatorType, StoreUsersActionCreatorType } from "./data-structure";
import {setElementCmd } from "./data-structure";
import { getAllUsers } from "../../utility/logic";


const fetchUserActionCreator:StoreUsersActionCreatorType=()=>{
       return  getAllUsers
};


const setElementActionCreator:SetElementActionCreatorType = (payLoad)=>{
       return{
              type: setElementCmd,
              payLoad: payLoad
       }

}

export {fetchUserActionCreator, setElementActionCreator}
