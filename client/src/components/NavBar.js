import React from "react"
import {NavLink, Link} from "react-router-dom"

function NavBar({setUser}){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return(
        <nav>
            <Link to="/">
                Recipe Riot
            </Link>
            <NavLink to="/post">
                Make post
            </NavLink>
            <NavLink to="/account">
                Profile
            </NavLink>
            <button onClick={handleLogoutClick}>
                Logout
            </button> 
        </nav>
    )
}

export default NavBar