
import {NewsRouter} from '../moudules/main/routes/NewsRoutes'
import { AboutUsroutes} from '../moudules/main/routes/AboutUsRoutes'
import App from "../App"
import Main from '../moudules/main/pages/Main';
export const routes = [


     {
        path:'/',
        element:<App/>,
        children:
        [
            {
            path:'',
            element:<Main />,
            },
            
           ...NewsRouter,
            ...AboutUsroutes,
    
    
        ],

     },

];