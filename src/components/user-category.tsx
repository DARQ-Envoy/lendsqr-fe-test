import React from 'react'

type UserCategoryProps = {
    imgSrc:string,
    description:string,
    value: number
}

const UserCategory:React.FC<UserCategoryProps> = ({imgSrc, description, value}) => {
  return (
    <div className='category'>
        <img src={imgSrc}/>
        <h6>{description}</h6>
        <span>{value}</span>
    </div>
  )
}

export {UserCategory};
export type{UserCategoryProps};