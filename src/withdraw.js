import React, { useContext, useState } from "react";
import userContext from "./context.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Withdraw.css"; // Import CSS file

export default function Withdraw() {
  const ctx = useContext(userContext);
  const [withdraw, setWithdraw] = useState(0);
  const [username, setUsername] = useState(""); // State for username
  const [showUserData, setShowUserData] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    const user = ctx.users.find((user) => user.name === username);
    if (user) {
      if (user.amount >= withdraw) {
        user.amount -= Number(withdraw);
        alert(`Rs.${withdraw} Amount Debited from ${username}'s Account`);
        setShowUserData(true);
      } else {
        alert("Insufficient balance.");
      }
    } else {
      alert("Username not found");
    }
  }

  function handleReset() {
    setUsername("");
    setWithdraw(0);
    setShowUserData(false);
  }

  return (
    <div className="container">
      <div className="card">
        <Form onSubmit={handleClick} onReset={handleReset}>
          <h4>Withdraw Your Amount Here</h4>
          <hr />
          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Label id="label">Username:</Form.Label>
            <Form.Control
              type="text"
              id="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Label id="label">Withdraw Amount:</Form.Label>
            <Form.Control
              type="number"
              id="input"
              value={withdraw}
              onChange={(e) => setWithdraw(e.target.value)}
            />
            <Button
              type="submit"
              id="submitbtn"
              variant="danger"
              className="btn"
            >
              Submit
            </Button>
            <Button
              type="reset"
              id="resetbtn"
              variant="primary"
              className="btn"
            >
              Reset
            </Button>
          </Form.Group>
        </Form>
      </div>
      
    </div>
  );
}
