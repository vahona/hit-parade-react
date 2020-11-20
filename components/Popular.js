import React, { useContext, useEffect, useState } from 'react'
import {Context} from '../Context'

function Popular(Songs) {
    const { song, favoriteSong} = useContext(Context)
    const [hovered, setHovered] = useState(false)
     console.log("khsjfha",hovered)

    function favoriteIcone() {
        if(!hovered) {
            return (
                <i onClick={() => favoriteSong(song.id)}> <svg svg xmlns="http://www.w3.org/2000/svg" fill="yellow" height="24" viewBox="0 0 24 24" width="24" ><path d="M0 0h24v24H0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg ></i>
                 )
        }

        else if (hovered) {
            return (
                <i onClick={() => favoriteSong(song.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></i>
            )
        }

    }

    function hover () {
        setHovered(true)
    }

    function nothover() {
        setHovered(false)
    }

    

    const arrowup = <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" /></svg>

    const dowward = <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></svg>

    const cartempty = <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>


    console.log(song);
    return(
        <div className="songs_list" >
            {song.map(songs => {
                console.log(songs);
                return (
                    <div className="song" key={songs.id}>
                        <i className="each" onMouseLeave={nothover}  onMouseEnter={hover}>
                            {favoriteIcone()}
                        </i>
                        <div className="each">{songs.Artist}{console.log(songs.Artist)}</div>
                        <p className="each">{songs.title}</p>
                        <i className="each">{arrowup}</i>
                       <i className="each">{dowward}</i>
                <p className="each">{cartempty}</p>
                <p className="each"></p>
                </div>
                )
            })}
        </div>
    )
}

export default Popular