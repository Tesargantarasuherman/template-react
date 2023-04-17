import { Home, Login } from "../../pages";

const root = "/";


const home = [
    {
        path: `${root}`,
        component: <Home />,
        navbar: true,
        is_login_access:false,
    },
    {
        path: `${root}sign`,
        component: <Login />,
        navbar: false,
        is_login_access:false,
    },
];

export default home;
