import { UserDataType } from "../../utility/data-structure"


// type StoreUsersActionType = {
//     type:StoreUsersActionCommand,
//     payload:UserDataType
// }
// type StoreUsersActionCreatorType = (payload:UserDataType)=>StoreUsersActionType;


// export type{StoreUsersActionCommand, StoreUsersActionType,StoreUsersActionCreatorType }

type UserDataInitialStateType= {
    userFetched: boolean;
    users:  UserDataType
}


type StoreUsersActionCmdType = "STORE_USERS";
// type StoreUsersAction = "STORE_USERS";
const storeUsersActionCmd:StoreUsersActionCmdType ="STORE_USERS"  


type StoreUsersActionType = {
    type: StoreUsersActionCmdType,
    payLoad: UserDataType
};


type StoreUsersActionCreatorType = ()=>()=>void;

type UserReducerType = (InitialState:UserDataInitialStateType,action:StoreUsersActionType)=>UserDataInitialStateType


export type{UserDataInitialStateType, StoreUsersActionType,StoreUsersActionCreatorType, UserReducerType}
export {storeUsersActionCmd}

