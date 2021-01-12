import React, {useState} from 'react'
import "firebase/auth";
import "firebase/firestore";
import {Form, Col, Button} from "react-bootstrap";
import {useHistory, Link} from "react-router-dom"

import {auth} from "./firebase"
import connect from "../assets/connect.jpg"
import "./Main.css";
import "../App.css"

function Main() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const history = useHistory('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

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
  
  const regHome = (event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      if(auth.user){
        auth.user.updateProfile({
          displayName: firstname + " " + lastname
        })
        .then((s)=>{
          history.push("/Feed")
        })
      }
    })
    .catch((e)=>{
      alert(e.message)
    })

  
  }

    return (
        <div className="App">
          <div className="bigdiv">
          <header>
          <div>
              <img className="img-logo" 
              alt="logo"
              src=" https://cdn.worldvectorlogo.com/logos/facebook-5.svg">
              </img> 
        
              <div className="head">
                
            
    <Form onSubmit = {login}>
              <Form.Row className="align-items-center">
    
                <Col sm={5} className="my-1" >
                        <Form.Control 
                        required
                        name="email"
                        type="email"
                        onChange ={(e)=> setEmail(e.target.value)}
                        placeholder="Enter Email"
                        />
                </Col>
    
                    <Col sm={5} className="my-1" >
                        <Form.Control 
                        required
                        name="password"
                        type="password"
                        onChange = {(e)=> setPassword(e.target.value)}
                        placeholder="Enter Password"
                        />
                </Col>

                <Col xs="2" className="my-1">
                  <Button type="submit">Login</Button>
                </Col>
              </Form.Row>
        
            </Form>
            <Link to ="/Register">
                       <p className="link"> Don't have an Account ? Sign Up</p>
                    </Link>
        
                </div>   
            </div> 
           </header>          
        </div>
            
          {/* CONTENT AND CREATE ACCOUNT */}
          <div className="content clearfix">
              <div className = "content-1">
                <p className="text-p">Facebook helps you to share and conncect with your friends</p>

                <img src={connect} className="connect-img" alt="logo"/>
               </div>
                   
               <div className = "content-2">
                 <h2 className="text-p">Create an Account</h2>
                   <p className="text-p">It's quick and easy!!</p>
                    <div className="account">
                        <Form onSubmit = {regHome}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                           <label className="label">First Name</label>
                            <Form.Control 
                            required 
                            type="text" 
                            // id="firstname"
                            name="firstname"
                            onChange = {(e)=> setFirstname(e.target.value)}
                            placeholder="First name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <label className="label">Last name</label>
                            <Form.Control 
                                required 
                                type="text" 
                                name="lastname"
                                onChange = {(e)=> setLastname(e.target.value)}
                                placeholder="Last name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <label className="label">Email Address</label>
                            <Form.Control 
                            required
                            name="email"
                            onChange = {(e)=> setEmail(e.target.value)}
                            type="email" 
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
                            <Form.Group as={Col} md="6" controlId="formGridState">
                            <label className="label">Gender</label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Male</option>
                                <option>Female</option>
                                <Form.Control.Feedback type="invalid">
                                
                                </Form.Control.Feedback>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                        
                        <input type="checkbox" required feedback="You must agree before submitting." /> 
                        <label className="agree">Agree to terms and conditions </label>
  

                            
                            
                        </Form.Group>

                        <Button type="submit">SignUp</Button>
                        <Link to ="/Login">
                                        <h6 className="bottom">Already have an Account ? Log In</h6>
                                        </Link>
                            </Form>
                     </div> 
                     {/* //Account div ends */}

              </div> 
                  {/* //Content-2 div ends here   */}

              </div>
               
          </div>

    )
}
 export default Main;
