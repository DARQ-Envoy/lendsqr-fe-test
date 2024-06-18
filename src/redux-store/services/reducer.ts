import { UserDataType } from "../../utility/data-structure";

import {UserReducerType, UserDataInitialStateType, storeUsersActionCmd, ElementStateType, ElementReducerType} from "./data-structure";


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
            nothing;
            return state;

    }
};

const placeHolderDiv = document.createElement("div")
placeHolderDiv.id =  "placeholder-element"
const elementInitialState: ElementStateType = { 
                                                "elements": {}
                                                };


const elementReducer: ElementReducerType = (state = elementInitialState, action)=>{
            switch(action.type){
                case "SET_ELEMENT":
                    const allElements = state.elements;
                    const newState:ElementStateType = {"elements": {...allElements, ...action.payLoad}};
                    return newState

                default:
                    const nothing:never = action.type;
                    nothing;
                    return state

            }
}

export {userReducer, elementReducer};