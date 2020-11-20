import React, { useContext} from 'react'
import {Context} from "../Context"


function Style() {
    const { song } = useContext(Context)
    console.log("mmm",song);
    return (
        <div>
            {song.map(songs => {
                return (
                <div key={songs.id}>
                    {songs.style}
                </div>
                )
            })}
        </div>
    )
}

export default Style