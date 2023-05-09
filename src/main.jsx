import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main.jsx'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>,
        loader: ()=> fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatecoffees/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
