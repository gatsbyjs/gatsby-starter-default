import React from "react"
import { createRoot } from 'react-dom/client'

import IndexPage  from '/pages/index.js'
import Resources  from '/pages/resources.js'
import Calendar   from '/pages/calendar.js'

import '/styles/main.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  { path: "/",            element: <IndexPage/>   },
  { path: "/resources",   element: <Resources/>   },
  { path: "/calendar",    element: <Calendar/>    },
])

createRoot(document.getElementById('Application'))
  .render(<RouterProvider router={router} />)
