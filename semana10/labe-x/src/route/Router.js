import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'







export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/ListTripsPage"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/AdminHomePage"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/ApplicationFormPage"}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={"/CreateTripPage"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/LoginPage"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/TripDetailsPage"}>
                    <TripDetailsPage />
                </Route>

            </Switch>


        </BrowserRouter>
    )
}