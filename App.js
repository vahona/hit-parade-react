
import React from "react"
import { Route, Switch } from "react-router-dom"
import Add from './components/Add'
import Card from './components/Card'
import Popular from './components/Popular'
import Style from './components/Style'
import Header from './Header'


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
            </Switch>
            {/* <>
                <Route path="/">
                    <Popular />
                </Route>
                {/* <Route path="/">
                    <Card />
                </Route>
                <Route path="/">
                    <Add />
                </Route>
                <Route path="/">
                    <Style />
                </Route> */}
        /</div>
    )
}

export default App