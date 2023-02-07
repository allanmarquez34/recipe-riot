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
            <Link exact to="/">
                Recipe Riot
            </Link>
            <NavLink to="post">
                Make post
            </NavLink>
            <NavLink to ="bookmark">
                Bookmarks
            </NavLink>
            <NavLink to="profile">
                Profile
            </NavLink>
            <button onClick={handleLogoutClick}>
                Logout
            </button> 
        </nav>
    )
}

export default NavBar