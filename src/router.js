import React from "react";
import Home from "./components/layouts/home";
import Login from "./components/layouts/login";
import Sigup from "./components/layouts/sigup";
import Box from "./components/layouts/box/box";
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
    {
        path: "/box",
        exact: false,
        component: () => <Box/>,
    },



];

export default routes;
