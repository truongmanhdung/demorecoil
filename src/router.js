import React from "react";
import Home from "./components/layouts/home";
import Login from "./components/layouts/login";
import Sigup from "./components/layouts/sigup";
const routes = [

    {
        path: "/",
        exact: true,
        component: ({history}) => <Home history={history}/>,
    },
    {
        path: "/login",
        exact: false,
        component: ({history}) => <Login history={history}/>,
    },
    {
        path: "/sigup",
        exact: false,
        component: () => <Sigup/>,
    },



];

export default routes;
