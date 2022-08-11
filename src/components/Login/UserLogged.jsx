import React from "react";
import { useNavigate } from "react-router-dom";
import './style/userLogged.css'

const UserLogged = () => {

  const navigate = useNavigate()

  const goHome = () =>{
    navigate('/')
  }

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="user-logged-screen">
      <div className="user-logged-letter">
        <i className="fa-solid fa-user-check"></i>
        <p>User Logged</p>
      </div>
      <div className="btns">
      <button
      onClick={logOut}
      className="btn-user-logged">Log out</button>
      <button 
      onClick={goHome}
      className="btn-user-logged" >Go home</button>
      </div>
    </div>
  );
};

export default UserLogged;
