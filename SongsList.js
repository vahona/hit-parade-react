import React from "react"
import {Context} from './Context'

import Popular from "./components/Popular"


function SongsList() {
    const { song } = useContext(Context)

    const allSongs = song.map((songs, index) => {
        <Popular
           key={songs.id}
           songs={songs}
            className="songs_list"
         />
    })


    return (
        <div>
            {allSongs}
        </div>
    )


}

export default SongsList
