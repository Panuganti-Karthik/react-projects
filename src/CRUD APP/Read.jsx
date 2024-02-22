import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faHome,
  faMobileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Read = () => {
  let [user, setUser] = useState({});
  console.log(user);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((val) => {
      setUser(val.data);
    });
  }, []);
  return (
    <>
      <div className="read">
        <div className="card">
          <div className="header">
            <FontAwesomeIcon icon={faUser} className="user" />
            <h3>{user.name}</h3>
            <p>User-Id : {user.id}</p>
          </div>
          <div className="body">
            <ul>
              <li>
                <h5>{user.mobile}</h5>
                <p>Mobile&nbsp;number</p>
                <FontAwesomeIcon icon={faMobileAlt} className="userdetail" />
              </li>
              <li>
                <h5>{user.email}</h5>
                <p>Email&nbsp;address</p>
                <FontAwesomeIcon icon={faEnvelope} className="userdetail" />
              </li>
              <li>
                <h5>{user.place}</h5>
                <p>Address</p>
                <FontAwesomeIcon icon={faHome} className="userdetail" />
              </li>
            </ul>
          </div>
          <div className="middle">
            <Link to={"/"} className="BackToHome">
              <button>
                <FontAwesomeIcon icon={faArrowLeft} color="white"/> Go Back
              </button>
            </Link>
          </div>
          <div className="footer">
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebookF} className="Social-icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="Social-icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} className="Social-icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedinIn} className="Social-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
