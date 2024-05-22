import * as lenderNavImages from "../assets/lender-nav-icons";
import { lenderNavLinkGenerator, stringHypenSplitter } from "./processors";

const {auditLogs, dashboard, decisionModels, feesAndCharges, feesAndPricing, guarantors, karma, loanProducts, loanRequests, loans, organization, preferences, reports, savingsProducts, savings, serviceAccount, services, settlements, transactions, users, whitelist} = lenderNavImages;
const customerImages = [users, guarantors, loans, decisionModels, savings, loanRequests, whitelist, karma];
const businessImages = [organization, loanProducts, savingsProducts, feesAndCharges, transactions, services, serviceAccount, settlements, reports];
const settingsImages = [preferences, feesAndPricing, auditLogs]


type LenderNavLinkType = {
    desc:string,
    imgSrc:string
};

type LenderNavLinksGroup = {
    heading:string,
    links:Array<LenderNavLinkType>
};
type LenderNavDataType = Array<LenderNavLinksGroup>



const LenderNavData:LenderNavDataType = [
        {
            heading:"CUSTOMERS",
            links: customerImages.map(img=>{
                const linkText = lenderNavLinkGenerator(img);
                const imageSrc = img;
                return {
                    desc: linkText,
                    imgSrc: imageSrc
                }
            })
        },
        {
            heading:"BUSINESS",
            links: businessImages.map(img=>{
                const linkText = lenderNavLinkGenerator(img);
                const imageSrc = img;
                return {
                    desc: linkText,
                    imgSrc: imageSrc
                }
            })
        },
        {
            heading:"SETTINGS",
            links: settingsImages.map(img=>{
                const linkText = lenderNavLinkGenerator(img);
                const imageSrc = img;
                return {
                    desc: linkText,
                    imgSrc: imageSrc
                }
            })
        }
];


export {LenderNavData};
export type {LenderNavLinksGroup};



// User Details for display in the list



type UserDataType = {
    "personalDetails": {
      "_id": string,
      "index": number,
      "guid": string,
      "username": string,
      "email": string,
      "gender": string,
      "accountTier": number,
      "status": string,
      "phoneNumber": string,
      "dateJoined": string,
      "balance": string,
      "organization": string,
      "maritalStatus": string,
      "children": number,
      "residence": string
    },
    "educationAndEmployment": {
      "education": string,
      "employmentStatus": string,
      "employmentSector": string,
      "employmentDuration": number,
      "officeEmail": string,
      "income": string,
      "debt": string
    },
    "socials": {
      "twitter": string,
      "facebook": string,
      "instagram": string
    },
    "guarantor": [
      {
        "fullName": string,
        "phoneNumber": string,
        "email": string,
        "relationship": string
      },
      {
        "fullName": string,
        "phoneNumber": string,
        "email": string,
        "relationship": string
      }
    ]
  }[]





type listDisplayPropertiesType = [
    "organization",
    "username",
    "email",
    "phone-number",
    "date-joined",
    "status"
]


type userObjectPropertiesType = [
    "organization",
    "username",
    "email",
    "phoneNumber",
    "dateJoined",
    "status"
]


const listDisplayProperties:listDisplayPropertiesType = [
    "organization",
    "username",
    "email",
    "phone-number",
    "date-joined",
    "status"
]

const allHeadingProps = listDisplayProperties.map((text)=>{
    const textToUpper = text.toUpperCase();
    const textSplitted = stringHypenSplitter(textToUpper)
    return [text, textSplitted]
})


type  displayProperties = userObjectPropertiesType[number];
type displayDetails = {
    [x in displayProperties]: string
}
type userDetailsDisplayProp = {
    user:displayDetails,
    setRef:React.Dispatch<React.SetStateAction<HTMLDivElement|null>>,
    userIndex:number
}



export {listDisplayProperties, allHeadingProps}
export type {UserDataType, listDisplayPropertiesType,userObjectPropertiesType, displayProperties, displayDetails, userDetailsDisplayProp}


// const [auditLogs, dashboard, decisionModels, feesAndCharges, feesAndPricing, guarantors, karma, loanProducts, loanRequests, loans, organization, preferences, report, savingsProducts, savings, serviceAccount, services, settlements, transactions, users, whitelist = Object.create(lenderNavImages)


const userStorageKey = "allUsers";

export{userStorageKey}





type UserOptionType = {img:string,text:string};
type UserOptionsGroup =UserOptionType[];



export type{UserOptionsGroup,UserOptionType};









