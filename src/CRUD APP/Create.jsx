import React, { useState } from "react";
import axios  from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigate=useNavigate()
  let [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    place: "",
    mobile: "",
  });
  let { id, name, email, place, mobile } = data;
  let handleChange = (e) => {
    // console.log(e)
    // ? destructing e.target.name and e.terget.value
    let {name, value} = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users",data)
    navigate("/")
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="id">ID</label>
              </td>
              <td>:</td>
              <td>
                <input
                  type="tel"
                  name="id"
                  id="id"
                  onChange={handleChange}
                  value={id}
                />
              </td>
            </tr>
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
                  type="text"
                  name="mobile"
                  id="mobile"
                  onChange={handleChange}
                  value={mobile}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={3} align="center">
                <button type="submit">SubmIt</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Create;
