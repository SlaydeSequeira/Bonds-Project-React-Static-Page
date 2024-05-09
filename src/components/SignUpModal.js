// src/components/SignUpModal.js
import React from 'react';
import '.././App.css'; 
import { Modal, Button, Form } from 'react-bootstrap';

const SignUpModal = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" id="signUpModal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h1 className="fw-bold">
                Test<span className="text-primary">BOND</span>
              </h1>
              <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <p>
                      Welcome to <span className="text-success">Test-BOND!</span>
                    </p>
                  </div>
                  <div className="carousel-item">
                    <p>
                      Trusted by <span className="text-success">38,000+</span> investors in <span className="text-success">India</span>.
                    </p>
                  </div>
                  <div className="carousel-item">
                    <p>
                      Bonds worth <span className="text-success">₹600+ crores</span> sold with <span className="text-success">0 defaults</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2 className="my-5">Sign In to know more...</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" required placeholder="Enter your phone number" />
                </Form.Group>
                <Button variant="primary" className="mt-4" disabled>
                  Get OTP
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Button variant="light" onClick={handleShow} className="d-none">
        Sign Up
      </Button>
    </>
  );
};

export default SignUpModal;
