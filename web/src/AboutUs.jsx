import React from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../src/images/AboutUs.png"
import "./AboutUs.css";
import boy from '../src/images/boy.png';
import girl from '../src/images/girl.png';


const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__content">
              <h1 className="text-center">Our Story</h1>
              <p2>Best shopping opportunity|Choose,purchase,enjoy. </p2>
              <p>
                We have been working on the term of dream clothing for all types of
                persons.<br></br>It took us days to set up this online website dedicated to providing you a chance to meet
                the clothing that looks and feels like a dream, in high quality, unique-design and low price.<br></br>Remember you can wear whatever
                , be whatever.We believe we can make a difference.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

        </Row>

        <Row className="mt-2">
          <section class="featuredPro">
            <div class="container py-5">
              <div class="row py-5">
                <div class="col-lg-5 mx-auto text-center">
                  <h1>Team Member</h1>
                </div>
                <div class="row py-5">
                  <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light">
                      <div class="card-body">
                        <img src={girl} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Tasnuva Binte Rahman</h5>

                  </div>
                  <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light">
                      <div class="card-body">
                        <img src={boy} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Samir Sarker</h5>

                  </div>

                  <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light">
                      <div class="card-body">
                        <img src={boy} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Kazi Toufique Elahi</h5>

                  </div>

                  <div class="col-lg-3 text-center">
                    <div class="card border-0 bg-light">
                      <div class="card-body">
                        <img src={girl} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Tahira Ferdousi</h5>

                  </div>

                </div>
              </div>
            </div>
          </section>
        </Row>


      </Container>
    </section>
  );
};

export default AboutUs;