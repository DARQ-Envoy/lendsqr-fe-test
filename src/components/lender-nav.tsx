import React from 'react'
import { LenderNavLink } from './lender-nav-link'
import BriefCase from "../assets/lender-nav-icons/organization.svg"
import Home from "../assets/lender-nav-icons/dashboard.svg"
import logo from "../assets/Logo.svg"
import { LenderNavGroup } from './lender-nav-group';
import { LenderNavData } from '../utility/data-structure';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../redux-store/store';
import { storeElement } from '../utility/logic'
import { SearchField } from './search-field'


const LenderNav:React.FC = () => {
// const allLinks:{}  = Object(lenderNavImages)
const elementsState = useSelector((state:GlobalState)=> state.elementReducer);
const lenderNavElementId = 'lender-nav-el';
 const dispatch = useDispatch();

  return (
    <div id={lenderNavElementId} ref={(ref)=>{
      ref && storeElement(elementsState,ref,dispatch)
    }}>
<div id='overlay-el' className="overlay hidden md-block" >

</div>
<nav id='lender-nav'>
        <img src={logo} alt="Logo"/>
        <SearchField customClasses="hidden md-block lender-nav-search-field"/>
        <div id='main-lender-nav'>
        <LenderNavLink text='Switch Organization' icon={BriefCase} hasDropdown/>
        <LenderNavLink text='Dashboard' icon={Home} />
        {
          LenderNavData.map((group,index)=><LenderNavGroup heading={group.heading} links={group.links} key={index}/>)
        }
        </div>


    </nav>
    </div>

  )
}

export {LenderNav}