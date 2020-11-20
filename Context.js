import React, { Children, useEffect, useState } from 'react'
import Songs from './Songs.json'

const Context = React.createContext();


function ContextProvider(props) {
  const [song, setSong] = useState(Songs)
  console.log(song);


  return (
      <Context.Provider value={{song, setSong}}>
          {props.Children}
      </Context.Provider>
  )
}

export {ContextProvider, Context}