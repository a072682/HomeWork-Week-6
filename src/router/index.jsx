import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import Index from "../pages/Index";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Subscription from "../pages/Subscription";
import Subscription02 from "../pages/Subscription02";
import Subscription03 from "../pages/Subscription03";
import AllTheme from "../pages/AllTheme";
import ThemePage from "../pages/ThemePage";
import AboutUs from "../pages/AboutUs";


const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
		children:[
            {
                path: "",
                element: <Index />,
            },
			{
                path: "AllTheme",
                element: <AllTheme />,
            },
            {
                path: "ThemePage/:id_first",
                element: <ThemePage />,
            },
            {
                path: "/AboutUsPage",
                element: <AboutUs />,
            },
            {
                path: "Subscription/:id_name",
                element: <Subscription />,
            },
            {
                path: "Subscription-check/:id_name",
                element: <Subscription02 />,
            },
            {
                path: "Subscription-final/:id_name",
                element: <Subscription03/>,
            },
		],
    },
    
    {
        path: "/LoginPage",
        element: <LoginPage />,
    },
    {
        path: "/RegisterPage",
        element: <RegisterPage />,
    },
    
])
export default router;