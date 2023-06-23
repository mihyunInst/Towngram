import axios from "axios";
import { useState } from "react";

function SearchBar({changeSearch, search, handleLogout, handleWrite}) {


    return (
        <div className="navBox">
            <div onClick={handleWrite}>WRITE</div>
            <div className="searchBar">
                <span># Search</span>
                <input id="searchInput" onChange={changeSearch} value={search}/>
            </div>
            <div onClick={handleLogout}>LOGOUT</div>
        </div>
    )
}
export default SearchBar;