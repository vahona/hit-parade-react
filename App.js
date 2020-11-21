
import React from "react"
import { Route, Router, Switch } from "react-router-dom"
import AddSong from './components/AddSong'
import Card from './components/Card'
import Popular from './components/Popular'
import Style from './components/Style'
import Header from './Header'
import SongsList from './SongsList'
import Filteredstyle from './Filteredstyle'


function App() {
    return (
        <div> 
            <h1>Hit parade</h1>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Popular />
                </Route>
                <Route path="/style">
                    <Style />
                </Route>
                <Route path="/AddSong">
                    <AddSong />
                </Route> 
                <Route path="/Filteredstyle">
                    <Filteredstyle />
                </Route>
            </Switch>
        </div>
    )
}

export default App