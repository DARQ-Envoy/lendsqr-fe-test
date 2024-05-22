import React from 'react'
import searchIcon from "../assets/search-icon.svg" 

const SearchField:React.FC = () => {
  return (
    <div id='search-field'>
        {/* <label htmlFor="search-input" >Search for anything</label> */}
        <input type="text" id='search-input' placeholder='Search for anything'/>
        <button>
        <img src={searchIcon} alt=""/>
        </button>
    </div>
  )
}

export {SearchField}