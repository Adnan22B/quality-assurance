import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs" 
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import SQA from "./pages/Services/SQA";
import WebTesting from "./pages/Services/WebTesting"
import AppTesting from "./pages/Services/AppTesting"




const ROUTES  = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/services",
        component: Services,
    },
    {
        path: "/blogs",
        component: Blogs,
    }, 
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/sqa",
        component: SQA,
    },
    {
        path: "/web-testing",
        component: WebTesting,
    },
    {
        path: "/app-testing",
        component: AppTesting,
    },
];

export default ROUTES;