import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div>
            <ul className="list">
                <Link to="/Popular"><li className="link"> Popular Songs</li></Link>
                <Link to="/Style"><li className="link">Styles</li></Link>
                <Link to="/Add"><li className="link"> Add </li> </Link>
                <Link to="/Card"><li className="link">Cart</li></Link>
            </ul>
        </div>
    )
}

export default Header