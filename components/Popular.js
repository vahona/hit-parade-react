import React, { useContext } from 'react'
import {Context} from '../Context'

function Popular(Songs) {
    const { song} = useContext(Context)
    console.log(song);
    return(
        <div >
            {song.map(songs => {
                console.log(songs);
                return (
                    <div className="song" key={songs.id}>
                        <p className="each">Favorite</p>
                        <div className="each">{songs.Artist}{console.log(songs.Artist)}</div>
                        <p className="each">{songs.title}</p>
                        <p className="each">up</p>
                        <p className="each">doun</p>
                        <p className="each">card</p>
                        <p className="each">more</p>
                </div>
                )
            })}
        </div>
    )
}

export default Popular