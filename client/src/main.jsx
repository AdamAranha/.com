import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import './main.css'
import Add from './routes/Add/Add.jsx'
import Accounts from './routes/Accounts/Accounts.jsx'
import Budget from './routes/Budget/Budget.jsx'
import Help from './routes/Help/Help.jsx'
import Reports from './routes/Reports/Reports.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav/>,
    children: [

      {
        path: '/add',
        element: <Add/>
      },
      {
        path: '/accounts',
        element: <Accounts/>
      },
      {
        path: '/budget',
        element: <Budget/>
      },
      {
        path: '/help',
        element: <Help/>
      },
      {
        path: '/reports',
        element: <Reports/>
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
