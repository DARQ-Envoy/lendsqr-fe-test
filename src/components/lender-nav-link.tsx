import React from 'react';
import dropDownIcon from "../assets/drop_down_icon.svg";

type LenderNavLinkProp = {
    icon:string,
    text:string,
    hasDropdown?:boolean
}; 


const LenderNavLink:React.FC<LenderNavLinkProp> = ({icon,text,hasDropdown=false}) => {
  return (
        <a href="/" className='lender-nav-link'>
            <img src={icon} alt={`${text} icon`} />
            <span>{text}</span>
            { hasDropdown && <img src={dropDownIcon} alt="dropdown icon" /> }
        </a>
  )
}

export {LenderNavLink}