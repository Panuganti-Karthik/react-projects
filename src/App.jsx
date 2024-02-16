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
// ! CRUD APP Router(v6)
// * json-server --watch db.json(filename)
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./CRUD APP/Home";
import Update from "./CRUD APP/Update";
import Read from "./CRUD APP/Read";
import Create from "./CRUD APP/Create";
import PageNotFound from "./CRUD APP/PageNotFound";

let route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;

// ! 09/02/2024
// ! CRUD APP Router(v5)
// * json-server --watch db.json(filename)
// ? if error use npm install —g json—server and then server command mentioned above
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./CRUD APP/Home";
// import Create from "./CRUD APP/Create";
// import Read from "./CRUD APP/Read";
// import Update from "./CRUD APP/Update";
// import PageNotFound from "./CRUD APP/PageNotFound";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<Create />} />
//           <Route path="/read" element={<Read />} />
//           <Route path="/update" element={<Update />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

// ! 15/02/2024
// ! Login/SignUp Page
// import React from "react";
// import LoginPage from "./LoginPage/LoginPage";

// const App = () => {
//   return (
//     <>
//       <LoginPage />
//     </>
//   );
// };

// export default App;
