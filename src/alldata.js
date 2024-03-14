import React, { useState } from 'react';
import userContext from "./context.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import './App.css';
import './Alldata.css';

export default function Alldata() {
  const ctx = useContext(userContext);
  const [showAdminData, setShowAdminData] = useState(false);
  const [showUserData, setShowUserData] = useState(false);
  const [userLoginData, setUserLoginData] = useState({
    accountNumber: '',
    userName: ''
  });

  const handleAdminLogin = () => {
    setShowAdminData(true);
    setShowUserData(false);
  };

  const handleUserLogin = () => {
    setShowUserData(true);
    setShowAdminData(false);
  };

  const handleUserLoginSubmit = (e) => {
    e.preventDefault();
    // Perform user login functionality
    console.log("User login data:", userLoginData);
    // Based on login success, show user data
    setShowUserData(true);
  };

  const handleChange = (e) => {
    setUserLoginData({
      ...userLoginData,
      [e.target.name]: e.target.value
    });
  };

  return (
    
    <>
    
      <h2>Bank Users Database</h2>
      <div>
        <button onClick={handleAdminLogin}>Admin Login</button>
        <button onClick={handleUserLogin}>User Login</button>
      </div>
      {showAdminData && (
        <>
          <h3>Admin View</h3>
          {/* Display all transaction details and account details here */}
          {ctx.users.map((item) => (
            <div key={item.id}>
            
              <p>Name: {item.name}</p>
             
              <p>Password: {item.password}</p>
              <p>Balance: {item.amount}</p>
            </div>
          ))}
        </>
      )}
      {showUserData && (
        <>
          <h3>User View</h3>
          {/* Display user login form */}
          <form onSubmit={handleUserLoginSubmit}>
            
            <div>
              <label htmlFor="userName">User Name:</label>
              <input type="text" id="userName" name="userName" value={userLoginData.userName} onChange={handleChange} />
            </div>
            <button type="submit">Login</button>
          </form>
          {/* Display user data after login */}
          {ctx.users.map((user) => {
            if (user.id === parseInt(userLoginData.accountNumber) && user.name === userLoginData.userName) {
              return (
                <div key={user}>
                
                  <p>Name: {user.name}</p>
                  
                  <p>Password: {user.password}</p>
                  <p>Balance: {user.amount}</p>
                </div>
              );
            }
            return null;
           
          })}
          
        </>
      )}
    </>

);
}

