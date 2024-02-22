import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Crud.css";
import {
  faEdit,
  faMagnifyingGlass,
  faPlus,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

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
  //!
  // let handleAdd = () => {
  //   window.open(
  //     "/create",
  //     "_blank",
  //     "height=400px,width=600px,top=100px,left=100px"
  //   );
  // };
  // !
  let handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`);
    // window.location.reload();
    handleRefresh();
  };
  // !
  let handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <div id="maindiv">
        <section className="table_header">
          <h1>CRUD APP</h1>
        </section>
        <div id="Add-Refresh">
          <Link onClick={handleRefresh} className="Refresh">
            {/* <button id="Refresh"></button> */}
            <FontAwesomeIcon
              icon={faRefresh}
              color="white"
              className="Refresh"
            />{" "}
            Refresh &nbsp;
          </Link>
          <Link to="/create" className="Add">
            {/* <button id="Add"></button> */}
            {/* <button id="Add" onClick={handleAdd}> */}
            &nbsp;
            <FontAwesomeIcon icon={faPlus} color="white" className="Add" />
            &nbsp;Data
          </Link>
        </div>
        <div id="subdiv">
          <table id="DisplayTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PLACE</th>
                <th>MOBILE</th>
                <th>READ</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            {users == null
              ? "Loading....."
              : users.map((val, index) => {
                  return (
                    // <Fragment key={index}>
                    <tbody key={val.id}>
                      <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.place}</td>
                        <td>{val.mobile}</td>
                        <td>
                          <Link to={`/read/${val.id}`}>
                            {/* <button>READ</button> */}
                            <FontAwesomeIcon
                              icon={faMagnifyingGlass}
                              color="black"
                              className="Fa"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/update/${val.id}`}>
                            {/* <button>EDIT</button> */}
                            <FontAwesomeIcon
                              icon={faEdit}
                              color="black"
                              className="Fa"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link onClick={() => handleDelete(val.id)}>
                            {/* DELETE */}
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              color="black"
                              className="Fa"
                            />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                    // </Fragment>
                  );
                })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
