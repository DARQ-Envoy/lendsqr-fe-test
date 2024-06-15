import React from "react";
import { SearchField } from "./search-field";
import bellIcon from "../assets/bell-icon.svg";
import avatar from "../assets/profile-image.svg";
import dropdownIcon from "../assets/drop_down_icon.svg";
import Logo from "../assets/Logo.svg";
import { useState } from "react";

const Header:React.FC = ()=>{
    const [displayOptions, setDisplayOptions] = useState<boolean>(false)
    return (
            <header id="header">
                {/* <img src={Logo} alt="logo" className="hidden sm-block" /> */}
                <div id="navigation-sm" className="hidden sm-flex">
                    <img src={Logo} alt="" className="sm-logo"/>
                <div className="options-sm relative" onClick={()=>{
                    setDisplayOptions(prev=>!prev)
                }}>
                    <img src={avatar} alt="" className="avatar"/>
                    <img src={dropdownIcon} className="drop-down-icon-sm"/>


                {displayOptions && <div className="absolute nav-options-sm">
                        <a href="">View Profile</a>
                        <a href="">Docs</a>
                        <a href="">Notifications</a>
                </div>}
                </div>

                </div>


                <div id="navigation-md" className="hidden sm-hidden md-flex">
                    <img src={Logo} alt="" className="md-logo"/>
                    <SearchField customClasses="search-field-md"/>
                <div className="options-md relative" onClick={()=>{
                    setDisplayOptions(prev=>!prev)
                }}>
                    <img src={avatar} alt="" className="avatar"/>
                    <span>Adeniji</span>
                    <img src={dropdownIcon} className="drop-down-icon-md"/>


                {displayOptions && <div className="absolute nav-options-md">
                        <a href="">View Profile</a>
                        <a href="">Docs</a>
                        <a href="">Notifications</a>
                </div>}
                </div>

                </div>


<div id="large-navigation" className="md-hidden">
                <SearchField customClasses=""/>
                <div id="navigation" className={""} >
                    <a href="#">Docs</a>
                    <img src={bellIcon} alt="" className="bell-icon"/>
                 
                    <div className="options">
                    <a href="">
                    <img src={avatar} alt="" className="avatar"/>
                    </a>
                        <span>Adeniji</span>
                        <img src={dropdownIcon} className="drop-down-icon"/>
                    </div>
                </div>
</div>
               
            </header>
        )
};


export {Header}