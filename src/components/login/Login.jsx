import { signInWithGoogle,signInWithEmailAndPassword,
    registerWithEmailAndPassword } from "../../firebase";

  import Form from "react-bootstrap/Form";
  import Button from "react-bootstrap/Button";
  import Card from "react-bootstrap/Card";
  
  import React, { useState } from "react";
  

  
  const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    return (
        <>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Login
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        
      </div>
      <div class="modal-body">
        ...
        <div className="container-fluid" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col col-2"></div>
          <div className="col col-8">
            <div className="row">
              <div className="col col-6">
                <Card>
                  <Card.Body>
                    <Card.Title>User Login</Card.Title>
                    <div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </Form.Group>
                      <hr style={{ margin: "5%" }} />
  
                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-success"
                          type="submit"
                          onClick={() => {
                            signInWithEmailAndPassword(loginEmail, loginPassword);
                          }}
                        >
                          Login
                        </Button>
                        <Button
                          variant="outline-primary"
                          onClick={signInWithGoogle}
                        >
                          <i className="fab fa-google"></i>Sign-in with Goolge
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col col-6">
                <Card>
                  <Card.Body>
                    <Card.Title>User Registration</Card.Title>
                    <Card.Text>First time visiting? register Here</Card.Text>
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
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
</>
    )
  };
  
  export default Login;