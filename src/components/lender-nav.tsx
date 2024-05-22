import React from 'react'
import { LenderNavLink } from './lender-nav-link'
import BriefCase from "../assets/lender-nav-icons/organization.svg"
import Home from "../assets/lender-nav-icons/dashboard.svg"
import * as lenderNavImages from "../assets/lender-nav-icons";
import { lenderNavLinkGenerator } from '../utility/processors';
import logo from "../assets/Logo.svg"
import { LenderNavGroup } from './lender-nav-group';
import { LenderNavData } from '../utility/data-structure';

const LenderNav:React.FC = () => {
// const allLinks:{}  = Object(lenderNavImages)
console.log(lenderNavLinkGenerator("../assets/lender-nav-icons"))
 
  return (
    <nav id='lender-nav'>
        <img src={logo} alt="Logo"/>
        <div id='main-lender-nav'>
        <LenderNavLink text='Switch Organization' icon={BriefCase} hasDropdown/>
        <LenderNavLink text='Dashboard' icon={Home} />
        {
          LenderNavData.map((group,index)=><LenderNavGroup heading={group.heading} links={group.links} key={index}/>)
        }
        </div>


    </nav>
  )
}

export {LenderNav}