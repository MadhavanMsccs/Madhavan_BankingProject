import { useContext, useState } from "react";
import userContext from "./context.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Deposit.css'; // Import CSS file

export default function Deposit() {
  const ctx = useContext(userContext);
  const [dep, setDep] = useState(0);
  const [username, setUsername] = useState(""); // State for username

  function handleClick(e) {
    e.preventDefault();
    const user = ctx.users.find(user => user.name === username); // Changed from 'username' to 'name'
    if (user) {
      user.amount = Number(user.amount) + Number(dep);
      alert(`Rs.${dep} Amount Credited on ${username}'s Account`);
    } else {
      alert("Username not found");
    }
  }

  function handleReset() {
    setUsername("");
    setDep(0);
  }

  return (
    <div className="deposit-container">
      <div className="card-container">
        <Form onSubmit={handleClick} onReset={handleReset}>
          <h4>Deposit Your Amount Here</h4>
          <hr />
          <Form.Group className="mb-3" controlId="usernameInput">
            <Form.Label id="usernameLabel">Username:</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amountInput">
            <Form.Label id="amountLabel">Deposit Amount:</Form.Label>
            <Form.Control type="number" value={dep} onChange={(e) => setDep(e.target.value)} />
          </Form.Group>
          <Button type="submit" variant="danger">Submit</Button>
          <Button type="reset" variant="primary">Reset</Button>
        </Form>
      </div>
    </div>
  );
}
