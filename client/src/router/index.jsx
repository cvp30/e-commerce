import { createBrowserRouter } from 'react-router-dom'

import NavBar from '../Layouts/NavBar'
import Home from '../pages/Home/Home'
import Electronics from '../pages/ProductDetail/Electronics'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                index: true,
                element: <Home />
            },
            // {
            //     path: 'electronics',
            //     element: <Electronics />
            // }
        ]
    },

    
])