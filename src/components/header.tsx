import React from "react";
import { SearchField } from "./search-field";
import bellIcon from "../assets/bell-icon.svg"
import avatar from "../assets/profile-image.svg"
import dropdownIcon from "../assets/drop_down_icon.svg"


const Header:React.FC = ()=>{

    return (
            <header id="header">
                <SearchField/>
                <div id="navigation">
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
            </header>
        )
};


export {Header}