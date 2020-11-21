import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../Context"



function Style() {

    const { song } = useContext(Context)

    const songStyle = song.map(songs => {
            return (
                <div key={songs.id}>
                    <Link className="style_link" to="/Filteredstyle">
                        <div key={songs.id} >
                            🎧 {songs.style}
                        </div>
                    </Link>
                </div>
            )
        })

    return (
        <div className="style">
            {songStyle}
        </div>
    )
}

export default Style