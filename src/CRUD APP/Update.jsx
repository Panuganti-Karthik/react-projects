import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Update = () => {
  let navigate = useNavigate();
  //
  let [data, setData] = useState({
    name: "",
    email: "",
    place: "",
    mobile: null,
  });
  //
  let { name, email, place, mobile } = data;
  //
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((val) => {
      setData(val.data);
    });
  }, []);
  //
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, data);
    navigate("/");
    // window.location.replace("/");
  };
  //
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  //
  return (
    <>
      <div className="CreateDiv">
        <div className="CreateH1">
          <h1>
            Enter <br /> Details&nbsp;to <br />
            Update
          </h1>
        </div>
        <div id="CreateMain">
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name">Name</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      value={name}
                      className="input-box"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Email</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={email}
                      className="input-box"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="place">Place</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      name="place"
                      id="place"
                      onChange={handleChange}
                      value={place}
                      className="input-box"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="mobile">Mobile Number</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      onChange={handleChange}
                      value={mobile}
                      className="input-box"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} align="center">
                    <button type="submit" className="button">
                      Submit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} align="center">
                    <Link to={"/"}>
                      <button className="button">Go Back</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
