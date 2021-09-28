import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>
            </Switch>

            <Switch>
                <Route exact path={'/detail'}>
                    <DetailsPage />
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Router