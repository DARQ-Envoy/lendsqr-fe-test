import React, { useEffect} from "react";
import { SearchField } from "./search-field";
import bellIcon from "../assets/bell-icon.svg";
import avatar from "../assets/profile-image.svg";
import dropdownIcon from "../assets/drop_down_icon.svg";
import Logo from "../assets/Logo.svg";
import Union from "../assets/logo-components/Union.svg"
import { useState } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../redux-store/store";
import { allElementIdValues } from "../redux-store/services/data-structure";
import { storeElement } from "../utility/logic";

const Header:React.FC = ()=>{
    const [displayOptions, setDisplayOptions] = useState<boolean>(false);
    const unionId:allElementIdValues = "union";
    const elementsState = useSelector((state:GlobalState)=>state.elementReducer);
    const allElements = useSelector((state:GlobalState)=>state.elementReducer.elements);
    const lendNavElement = allElements["lender-nav-el"];
    const unionElement = allElements[unionId];
    const dispatch = useDispatch();

    useEffect(()=>{
        const animation = gsap.context(()=>{
            const timeline = gsap.timeline({repeat: -1, repeatDelay: 3, ease:"none"})
            timeline.fromTo("#union",{
                scaleX: 1,
                scaleY:1,
            },{
                scaleX: 1.2,
                scaleY:1.2,
                duration: 0.1,
            })

            timeline.to("#union",{
                scaleX: 1,
                scaleY:1,
                duration: 0.3
            })
            timeline.to("#union",{
                scaleX: 1.2,
                scaleY:1.2,
                duration: 0.1
            })
            timeline.to("#union",{
                scaleX: 1,
                scaleY:1,
                duration: 0.3
            })
        }
        );



return ()=>{
    animation.revert()
}
    }, [])



useEffect(()=>{
    let animation:gsap.Context ;
    function displayLenderNav(){        
        if(lendNavElement){
            const nav = lendNavElement.querySelector("#lender-nav");
            const timeline = gsap.timeline()
            timeline.to(lendNavElement as HTMLElement,{
                display:"block",
                duration: 0.1,
            }) 
            timeline.to(nav,{
                translateX: 0,
                duration: 0.5,
                ease:"none"
            })
        }
 
  
}
function hideLenderNav(){
    if(lendNavElement){
        const nav = lendNavElement.querySelector("#lender-nav");
        const timeline = gsap.timeline()
        timeline.to(nav,{
            translateX: "-100%",
            duration: 0.5,
            ease:"none"
        })
        timeline.to(lendNavElement as HTMLElement,{
            display:"none",
            duration: 0.1,
        }) 

    }
}
    if(lendNavElement){
        const overlay = lendNavElement.querySelector("#overlay-el");
        unionElement?.addEventListener("click", displayLenderNav)
        overlay?.addEventListener("click",hideLenderNav)
    }
    return ()=>{
        const overlay = lendNavElement?.querySelector("#overlay-el")
        animation?.revert();
        unionElement?.removeEventListener("click",displayLenderNav);
        overlay?.removeEventListener("click",hideLenderNav);
    }
}, [unionElement, lendNavElement])






console.log(lendNavElement)
    return (
            <header id="header">
                {/* <img src={Logo} alt="logo" className="hidden sm-block" /> */}
                <div id="navigation-sm" className="hidden sm-flex">
                {/* <SearchField customClasses="search-field-sm"/> */}
                <div id="logo-comp" className="sm-logo">
                <img src={Union} className="pointer" alt="" id={unionId} ref={(ref)=>{ref && storeElement(elementsState,ref,dispatch)}}/>
                {/* <img src={LendLogo} alt="" id="lend-logo"/> */}
                </div>
                    
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