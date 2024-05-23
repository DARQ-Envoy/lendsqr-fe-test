import React, { useEffect, useState } from 'react';
import { UserCategory, type UserCategoryProps } from './user-category';
import * as userCat from "../assets/user-categories";
import {camelCaseConverter, dateProcessor, phoneNumberProcessor, emailProcessor } from '../utility/processors';
import { userObjectPropertiesType, UserDataType, displayDetails,listDisplayProperties ,allHeadingProps } from '../utility/data-structure';
import { getAllUsers } from '../utility/logic';
import { UserDetailsDisplay } from './user-details-display';
import Order from "../assets/order.svg"
import { userStorageKey } from '../utility/data-structure';
import {useDispatch, useSelector } from 'react-redux';
import type { GlobalState } from '../redux-store/store';
import { StoreUsersActionType, storeUsersActionCmd } from '../redux-store/services/data-structure';
import {Spinner} from "./spinner"
const Users:React.FC = () => {
    const {users, activeUsers, loanRecords, savings} = userCat;
    // const [allUsers, setAllUsers] = useState<UserDataType|null>(null);
    const [allDisplayUsers, setAllDisplayUsers] = useState<displayDetails[]>([]);
    const [userList, setUserList] = useState<JSX.Element[]>()
    const [, setDisplayedUserOptRef] = useState<HTMLDivElement|null>(null)
    const isUsersAvailable = useSelector((state:GlobalState)=>state.userReducer.userFetched)
    const allStoredUsers:UserDataType = useSelector((state:GlobalState)=>state.userReducer.users)
    const dispatch = useDispatch<any|StoreUsersActionType>();
    const displayProperties= allHeadingProps.map(([text,textSplitted],index)=>{
        return (<div className={`list-heading ${text}`} key={index}>
                <h6 className={`heading`} >{textSplitted}</h6>
                <img className='ordering-img' src={Order}/>
                </div>)
        
        }) 
    


 const userTypes:Array<UserCategoryProps> = [
    {
        imgSrc:users,
        description: "Users",
        value: 1001
    },
    {
        imgSrc:activeUsers,
        description: "Active Users",
        value: 2331
    },
    {
        imgSrc: loanRecords,
        description: "Loan Records",
        value: 3211
    },
    {
        imgSrc: savings,
        description: "Savings",
        value: 2361
    }

 ]



 
useEffect(()=>{
    if(!isUsersAvailable){
        const allUsers:string|null = localStorage.getItem(userStorageKey);
        console.log(allUsers);
        if(allUsers){
            console.log("fetching data from localStorage")
            dispatch({
            type: storeUsersActionCmd,
            payLoad: JSON.parse(allUsers)
        })
        }
        else{
        console.log("fetching userdata from api")
        dispatch(getAllUsers());
}
    }

    // else{
    //     console.log("fetching userdata from local storage")
    //     const allUsersObj:UserDataType = allStoredUsers;
    //     setAll(allUsersObj)
    // }
},[])



useEffect(()=>{
    console.log(allStoredUsers)
    const usersAccessed:boolean = allStoredUsers.length>1;
    console.log(usersAccessed, allStoredUsers.length)
    if(usersAccessed){
        console.log("Filling user data")
        const userObjectProperties:userObjectPropertiesType = listDisplayProperties.map(item=>camelCaseConverter(item)) as userObjectPropertiesType;
        const userList:displayDetails[] = allStoredUsers.map((data)=>{
        let obj: displayDetails = {
                "organization":"",
                "username":"",
                "email":"",
                "phoneNumber":"",
                "dateJoined":"",
                "status":""
        };

            userObjectProperties.forEach((key,index)=>{
                const value = data.personalDetails[key];
                if(key == "dateJoined"){
                obj = {...obj, [key]:dateProcessor(value)}

                }
                else if(key == "phoneNumber"){
                obj = {...obj, [key]:phoneNumberProcessor(value)}
                }
                else if(key == "email"){
                    const firstname = data.personalDetails["username"].split(" ")[0]
                    obj = {...obj, [key]:emailProcessor(value, firstname)}
                    }
                else{
                obj = {...obj, [key]:value}
                }
            })
            return obj;
        }) 


    // const userDetails:displayDetails = obj as displayDetails ;
    setAllDisplayUsers(userList)
    }


},[allStoredUsers])


useEffect(()=>{
    const userList = allDisplayUsers.map((user, key)=>{
        return <UserDetailsDisplay user={user} key={key} setRef={setDisplayedUserOptRef} userIndex={key}/>
    })
    console.log(allDisplayUsers, userList)
    setUserList(userList)
},[allDisplayUsers])
console.log(userList)
    return (
    <div id='user-info-section'>
        <h1>Users</h1>
        <section className={"all-categories"}>
            {
                userTypes.map((type, key)=>{
                    return <UserCategory imgSrc={type.imgSrc} description={type.description} value={type.value} key={key}/>
                })
            }
            
        </section>
        <section id={"user-list"}>
        <div id='user-list-heading'>
            {displayProperties}
        </div>
        <div id='main-user-list' className={!(userList?.length == allStoredUsers.length)?"list-loading":""}>
            {userList?.length == allStoredUsers.length ? userList:<Spinner/>}
        </div>        

        </section>

    </div>
  )
}

export {Users};

