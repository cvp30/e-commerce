import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './router'
import { RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider >
    <RouterProvider router={router}/>
  // </Provider>
)
