import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let [users, setUsers] = useState(null);
  useEffect(() => {
    // let output = axios.get("http://localhost:3000/users");
    // console.log(output);
    axios
      .get("http://localhost:3000/users")
      .then((values) => setUsers(values.data));
  }, []);
  // console.log(users);
  // let handleAdd = () => {
  //   window.open(
  //     "/create",
  //     "_blank",
  //     "height=400px,width=600px,top=100px,left=100px"
  //   );
  // };
  return (
    <>
      <Link to="/create">
        <button>Add</button>
      </Link>
      {/* <button onClick={handleAdd}>Add</button> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PLACE</th>
            <th>MOBILE</th>
          </tr>
        </thead>
        {users == null
          ? "Loading....."
          : users.map((val, index) => {
              return (
                <Fragment key={index}>
                  <tbody>
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.place}</td>
                      <td>{val.mobile}</td>
                      <td>
                        <button>READ</button>
                      </td>
                      <td>
                        <button>EDIT</button>
                      </td>
                      <td>
                        <button>DELETE</button>
                      </td>
                    </tr>
                  </tbody>
                </Fragment>
              );
            })}
      </table>
    </>
  );
};

export default Home;
