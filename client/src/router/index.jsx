import { createBrowserRouter } from 'react-router-dom'

import NavBar from '../Layouts/NavBar'
import Home from '../pages/Home/Home'
import ProductDetail from '../pages/ProductDetail/ProductDetail'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'detail',
                element: <ProductDetail />
            }
        ]
    },

    
])