import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Outlet,} from 'react-router-dom'

import Nav from './Components/Nav/Nav.jsx'
import Account from './Routes/BudgetTracker/Account/Account.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Nav/>,
  children: [
    {
      path: 'budgetTracker',
      // element: <><Outlet/></>,
      children: [
        {
          path: 'account',
          element: <Account/>,
        }
      ]
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
