/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Search({handleFormSubmit}){
    
    const[value,getValue]=useState("")

    const handleChange=(event)=>{
        getValue(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        handleFormSubmit(value)

    }
    return(
        <div className="row">
        <div className="col-12">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              className="form-control  mb-3 mt-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={value}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    )
}
export default Search;