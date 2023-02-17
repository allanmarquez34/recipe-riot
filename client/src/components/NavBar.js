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
                <Link to="/" className="nav">
                    Recipe Riot
                </Link>
                <NavLink to="/post" className="nav">
                    Make post
                </NavLink>
                <NavLink to="/account" className="nav">
                    Profile
                </NavLink>
                    <button class="button-26" role="button" onClick={handleLogoutClick} >
                        Logout
                    </button>
        </nav>
    )
}

export default NavBar