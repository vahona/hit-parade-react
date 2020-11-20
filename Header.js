import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div>
            <ul className="list">
                <Link to="/" className="link-list"><li className="link"> Popular Songs</li></Link>
                <Link to="/Style" className="link-list"><li className="link">Styles</li></Link>
                <Link to="/AddSong" className="link-list"><li className="link"> Add </li> </Link>
                <Link to="/Card" className="link-list"><li className="link">Cart</li></Link>
            </ul>
        </div>
    )
}

export default Header