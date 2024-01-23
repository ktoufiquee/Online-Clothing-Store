import React from "react";
import "./Confirmation.css";
import { Container, Row, Col } from "reactstrap";

const Confirmation = () => {
    return (
      <section>
        <Container>
            <p2>Thank you. Your order has been received.</p2>
          <Row>
            <Col lg="6" md="6">
              <div className="Order_Info">
                <h2 className="text-center">Order Info</h2>
                <p>
                 Order No:<br></br>
                 Date:<br></br>
                 Total:<br></br>
                 Payment Method:<br></br>
                </p>
              </div>
            </Col>
              
            <Col lg="6" md="6">
              <div className="Address">
              <h2 className="text-center">Billing Address</h2>
                <p>
                 Street:<br></br>
                 City:<br></br>
                 Country:<br></br>
                </p>
              </div>
            </Col>
          </Row>
          </Container>
    </section>
  );
};

export default Confirmation;