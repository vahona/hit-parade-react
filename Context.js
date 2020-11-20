import React, { Children, useEffect, useState } from 'react'
import Songs from './Songs.json'

const Context = React.createContext();


function ContextProvider(props) {
  const [song, setSong] = useState(Songs)

  console.log(song);

  function favoriteSong(id) {
    const newSong = song.map(songs => {
      if(songs.id === id) {
        return {
          ...songs,
          favorite: !songs.favorite
        }
      };
      return songs
    })

    setSong(newSong)
  }


  return (
      <Context.Provider value={{song, setSong, favoriteSong}}>
          {props.children}
      </Context.Provider>
  )
}

export {ContextProvider, Context}