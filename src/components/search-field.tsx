import React from 'react'
import searchIcon from "../assets/search-icon.svg" 



type SearchFieldProps = {
  customClasses?:string
}
const SearchField:React.FC<SearchFieldProps> = ({customClasses}) => {
  return (
    <div id='search-field' className={customClasses}>
        {/* <label htmlFor="search-input" >Search for anything</label> */}
        <input type="text" id='search-input' placeholder='Search for anything'/>
        <button>
        <img src={searchIcon} alt=""/>
        </button>
    </div>
  )
}

export {SearchField}