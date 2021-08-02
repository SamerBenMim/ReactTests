import React from 'react'
import './search-box.css'
export default function searchBox({ placeholder, handleChange}) {
    return (
        <div>
        <input type='search' className="search"
         placeholder={placeholder}
          onChange={handleChange}
         />
        </div> 
    )
}
