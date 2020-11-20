import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div>
            <ul>
                <Link to="/Popular"><li>Popular Songs</li></Link>
                <Link to ="/Style"><li>Styles</li></Link>
                <Link to = "/Add"><li> Add </li> </Link>
                <Link to ="/Card"><li>Cart</li></Link>
            </ul>
        </div>
    )
}

export default Header