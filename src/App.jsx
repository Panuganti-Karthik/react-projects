// ! 08/02/2024
// ! TODO APP
// import React from "react";
// import ToDo from "./ToDo/ToDo";
// import "./ToDo/ToDo.css"

// const App = () => {
//   return (
//     <>
//       <ToDo />
//     </>
//   );
// };

// export default App;

// ! 09/02/2024
// ! CRUD APP
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './CRUD APP/Home'
import Update from './CRUD APP/Update'
import Read from './CRUD APP/Read'
import Create from './CRUD APP/Create'
import PageNotFound from './CRUD APP/PageNotFound'

let route=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/update",
    element:<Update/>
  },
  {
    path:"/read",
    element:<Read/>
  },
  {
    path:"/create",
    element:<Create/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  }
])
const App = () => {
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App