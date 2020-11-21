import React, { Children, useEffect, useState } from 'react'
import Songs from './Songs.json'

const Context = React.createContext();


function ContextProvider(props) {
  const [song, setSong] = useState(Songs)
  const [upper, setUpper] = useState(0)

  // console.log(song);

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

  function upSong(idsong) {
    const songup = song.map(upsong => {
      if(upsong.id === idsong) {
        return {
          ...upsong,
          upper: upsong.upper + 1
        }
      };
      return upsong;
    })

    setSong(songup)
  }


  // function stylemuctches(style) {
  //   const stylesong = song.filter(styleson => styleson.style === style)
  //   if(stylesong) {
  //     return {
  //       styleson: styleson.style
  //     };
      
  //   }
  //   setSong(stylesong)
  //   return styleson
    
  // }


  // function stylefilter(style) {
  //   const whichstyle = song.map(styls => {
  //     if(styls.id === style) {
  //       return styls.style
  //     };
  //     return styls
  //   })

  //   setSong(whichstyle)
  // }


  return (
    <Context.Provider value={{ song, setSong, favoriteSong, upSong, upper, setUpper}}>
          {props.children}
      </Context.Provider>
  )
}

export {ContextProvider, Context}