import React from 'react'
import { UserOptionType } from '../utility/data-structure'
import { fileNameExtractor } from '../utility/processors'


const UserOption:React.FC<UserOptionType> = ({img,text}) => {
  return (
    <div className='user-option'>
        <img src={img} alt={text} className={`user-option-img ${fileNameExtractor(img)}`}/>
        <span className='user-option-text'>{text}</span>
    </div>
  )
}

export {UserOption}