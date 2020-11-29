import React from "react";


function Search(){
    return(
        <div className="row">
        <div className="col-12">
          <form className="form-inline">
            <input
              className="form-control  mb-3 mt-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    )
}
export default Search;