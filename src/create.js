
import React, { useContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import userContext from "./context.js";
import Form from 'react-bootstrap/Form';
import './Create.css'; // Import CSS file

export default function Create() {
  const ctx = useContext(userContext);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState(0);
  const [accountNo, setAccountNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if accountNo or email already exists
    const isDuplicateAccountNo = [...userData, ...ctx.users].some(user => user.id === accountNo);
    const isDuplicateEmail = [...userData, ...ctx.users].some(user => user.email === email);

    if (isDuplicateAccountNo || isDuplicateEmail) {
      alert("Username or password already exists!");
      return;
    }

    // Add new user data
    const newUser = { id: accountNo, name, email, password, amount };
    setUserData(prevUserData => [...prevUserData, newUser]);
    alert("Your New Account Created Successfully");
  }

  useEffect(() => {
    ctx.users = [...ctx.users, ...userData];
    setUserData([]);
  }, [userData]);

  return (
    <div className="container">
      <div className="card-container">
        <Form onSubmit={handleSubmit}>
          <h4>Bank Account Registration Form</h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label id="label"></Form.Label>
            
            <Form.Label id="label">User Name:</Form.Label>
            <Form.Control type="text" id="input" onChange={(e) => { setName(e.target.value) }} />
            <Form.Label id="label"></Form.Label>
            
            <Form.Label id="label">Password:</Form.Label>
            <Form.Control type="password" id="input" onChange={(e) => { setPassword(e.target.value) }} />
           
            <Button type="submit" id="submitbtn" variant="danger">Submit</Button>
            <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}