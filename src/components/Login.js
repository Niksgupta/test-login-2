import React, {useState} from "react";
import "firebase/auth";
import "firebase/firestore";
import {auth} from "./firebase"
import {Form, Col, Button} from "react-bootstrap"
import {useHistory, Link}  from "react-router-dom"
import "./Main.css";
import "../App.css"

function Login() {

  const history = useHistory('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const login = (event)=>{
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth)=>{
      console.log(auth)
      history.push("/Feed")
    }).catch((e)=>{
      alert(e.message);
    })
  }
  
  return (
    <div>
      <div className= "register-heading">          
          <img
            className="imglogo"
            src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"
            alt ="logo"
          />
      </div>
      <div className="first">
        <Form onSubmit = {login}>
    
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <label className="label">First Name</label>
              <Form.Control 
              required
              name="email"
              type="email" 
              onChange= {(e) => setEmail(e.target.value)}
              placeholder="Email Address" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <label className="label">Password</label>
              <Form.Control
                required 
                name="password"
                onChange = {(e)=> setPassword(e.target.value)}
                type="password"
                placeholder="Set Password"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <Form.Group>
                <input type="checkbox" required feedback="You must agree before submitting." /> 
                <label className="agree">Agree to terms and conditions </label>
          </Form.Group>

          <Button type="submit">Log In</Button>
          <Link to ="/Register">
                         <h6 className="bottom">Don't have an account ? Sign Up</h6>
                        </Link>
        </Form>
      </div>
    </div>
  );
}
export default Login;
