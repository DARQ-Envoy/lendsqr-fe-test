import { UserDataType } from "../../utility/data-structure";

import { StoreUsersActionType, UserReducerType, UserDataInitialStateType, storeUsersActionCmd} from "./data-structure";


const initialUserData :UserDataType = [{
    personalDetails: {
        "_id": "",
        "index": 0,
        "guid": "",
        "username": "",
        "email": "",
        "gender": "",
        "accountTier": 0,
        "status": "",
        "phoneNumber": "",
        "dateJoined": "",
        "balance": "",
        "organization": "",
        "maritalStatus": "",
        "children": 0,
        "residence": "",
    },
    educationAndEmployment: {
        "education": "",
        "employmentStatus": "",
        "employmentSector": "",
        "employmentDuration": 0,
        "officeEmail": "",
        "income": "",
        "debt": "",
    },
    socials: {
        "twitter": "",
        "facebook": "",
        "instagram": "",
    },
    guarantor: [
        {
            "fullName": "",
            "phoneNumber": "",
            "email": "",
            "relationship": "",
        },
        {
            "fullName": "",
            "phoneNumber": "",
            "email": "",
            "relationship": "",
        }
    ]
}
];

const userDataInitialState:UserDataInitialStateType ={
    userFetched:false,
    users: initialUserData
} ;


const userReducer:UserReducerType = (state=userDataInitialState, action)=>{
    switch (action.type){
        case storeUsersActionCmd:
            return {...state, userFetched:true,users:action.payLoad}
        default:
            const nothing:never = action.type;
            return state;

    }
};

export {userReducer};