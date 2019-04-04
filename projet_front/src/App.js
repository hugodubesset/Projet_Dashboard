import React, { Component } from 'react';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Menu from "./Menu/Menu";
import Ajouter from './Ajouter';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



function Formulaire() {
    return <Ajouter/>;
}

function Dashboard() {
    return <Menu/>;
}

const routes = [
    {
        path: "/formulaire",
        component: Formulaire
    },
    {
        path: "/dashboard",
        component: Dashboard,
    }
];


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}




class App extends Component {
    render() {
        return (

                    <Router>
                        <div>
                                <Navbar bg="dark" variant="dark">
                                    <Navbar.Brand >Music_Project</Navbar.Brand>
                                    <Nav className="mr">
                                        <Link to="/dashboard">Home</Link>
                                        <Link to="/formulaire">Ajouter</Link>
                                    </Nav>
                                </Navbar>

                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}



                        </div>
                    </Router>

        );
    }
}

export default App;