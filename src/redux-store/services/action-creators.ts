import { StoreUsersActionCreatorType, StoreUsersActionType } from "./data-structure";
import { getAllUsers } from "../../utility/logic";


const fetchUserActionCreator:StoreUsersActionCreatorType=()=>{
       return  getAllUsers
};

