import { createBrowserRouter } from 'react-router-dom'

import NavBar from '../Layouts/NavBar'
import Home from '../pages/Home'
import Category from '../pages/Category'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "category/:typeCategory",
                element: <Category />
            }
        ]
    },


])