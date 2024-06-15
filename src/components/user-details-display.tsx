import React, { useRef} from 'react'
import { listDisplayProperties, type userDetailsDisplayProp, type displayProperties, type UserOptionsGroup  } from '../utility/data-structure'
import { wordToCamelCase } from '../utility/processors';
import viewDetailsIcon from "../assets/user-options/view-details-option.svg";
import blackListIcon from "../assets/user-options/blacklist-option.svg"
import activateIcon from "../assets/user-options/activate-option.svg"  
import optionsIcon from "../assets/user-options/options-icon.svg";
import { UserOption } from './user-option';
import { changeUserOptionsDisplayed } from '../utility/processors';




const UserDetailsDisplay:React.FC<userDetailsDisplayProp> = ({user, setRef, userIndex}) => {
    const optionsRef:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement|null>(null);
    // const background
    const propOptions:UserOptionsGroup = [
        {
            img:viewDetailsIcon,
            text: "View Details"
        },
        {
            img: blackListIcon,
            text:"Blacklist User"
        },
        {
            img: activateIcon,
            text: "Activate User"
        }
    ]
    const allOptions:JSX.Element[] = propOptions.map((opt,index)=><UserOption key={index} img={opt.img} text={opt.text}/>);

    const allProperties:JSX.Element[] = listDisplayProperties.map((property, index)=>{
        const propInCamelCase = wordToCamelCase(property) as displayProperties;
        const value = user[propInCamelCase]
        if(propInCamelCase == 'status'){
        return (
        <div className='final-prop'>
            <li className={`status status-${value} ${property}`} key={index}>{value}</li>
            <div className='prop-options' onClick={()=>{
            const data = optionsRef.current;
            data&&changeUserOptionsDisplayed(setRef,data);
            }}>
        <img src={optionsIcon} className={`prop-options-icon`} />
        
        <div className="options" ref={(ref)=>{optionsRef.current=ref}} id={`user-${userIndex}`}>{allOptions}</div>

        </div>
            </div>)
        }
        else{
            return (<li className={`prop ${property}`} key={index}>{value}</li>)
        }
    })
    
    return (
    <ul className='prop-list'>
        {allProperties}
      

    </ul>
  )
}

export {UserDetailsDisplay};