import { UserDataType } from "../../utility/data-structure"


// type StoreUsersActionType = {
//     type:StoreUsersActionCommand,
//     payload:UserDataType
// }
// type StoreUsersActionCreatorType = (payload:UserDataType)=>StoreUsersActionType;


// export type{StoreUsersActionCommand, StoreUsersActionType,StoreUsersActionCreatorType }
type SetElementCmdType = "SET_ELEMENT";
const setElementCmd:SetElementCmdType = "SET_ELEMENT";
type allElementIdValues = "lender-nav-el"|"union";

type setElementActionPayloadType = {
    [element_id in allElementIdValues]?: HTMLElement
} 

type setElementActionType = {
    type: SetElementCmdType,
    payLoad: setElementActionPayloadType
}
type SetElementActionCreatorType = (payLoad:setElementActionPayloadType)=>setElementActionType;

type ElementStateType = {
                            "elements": setElementActionPayloadType
                            };



type ElementReducerType = (initialstate: ElementStateType, action:setElementActionType)=> ElementStateType




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


export type{UserDataInitialStateType, StoreUsersActionType,StoreUsersActionCreatorType, UserReducerType, SetElementCmdType, SetElementActionCreatorType, setElementActionType, ElementReducerType, ElementStateType, allElementIdValues}
export {storeUsersActionCmd, setElementCmd,}

