import { signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../../firebase"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useState } from "react";

function RegistrationForm() {
    
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [phone, setPhone] = useState("");

  

    

    

    return(
        <div>
            


              <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">User Registration</h1>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">close</button>
      </div>
      <div class="modal-body">
      <div className="container-fluid" >
      <div className="row">
        <div className="col col-2"></div>
        <div className="col col-12">
          <div className="row">
        
            <div className="col col-12">
              <Card>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>First time visiting? Register Here</Card.Text>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="johndoe@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="phone"
                        placeholder="0712345678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <hr style={{ margin: "5%" }} />

                    <div className="d-grid gap-2">
                      <Button
                        variant="outline-danger"
                        type="submit"
                        onClick={() => {
                          registerWithEmailAndPassword(name, email, password);
                        }}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-col-2"></div>
      </div>
    </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-target="#exampleModalToggle2" data-toggle="modal">Already have an account? Log in</button>
      </div>
    </div>
  </div>
</div>

<a class="btn btn-primary" data-toggle="modal" href="#exampleModalToggle" role="button">Get Started</a>
               
</div>
                   
    )       
}

export default RegistrationForm