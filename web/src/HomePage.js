import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/Men.jpg'
import img2 from './images/Women.jpg'
import img3 from './images/Children.jpg'
import mf1 from './images/mf1.jpg'
import wf1 from './images/wf1.jpg'
import bf1 from './images/bf1.jpg'
import mf2 from './images/mf2.jpg'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"

              />
              <Carousel.Caption>
                <h3>Mens Section</h3>
                <Button variant="primary" className="btnHome1 mt-3 ml-2">Shop Now</Button>{' '}
              </Carousel.Caption>


            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3> Womens Section </h3>
                <Button variant="primary" className="btnHome1 mt-3 ml-2">Shop Now</Button>{' '}

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption>
                < h3>Childrens Section</h3>
                <Button variant="primary" className="btnHome1 mt-3 ml-2">Shop Now</Button>{' '}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>

        <div>

          <section className="featuredPro">
            <div className="container py-5">
              <div className="row py-5">
                <div className="col-lg-5 mx-auto text-center">
                  <h1>Latest Arrivals</h1>
                </div>
                <div className="row py-5">
                  <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light">
                      <div className="card-body">
                        <img src={mf1} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Blue Cotton Formal Shirt</h5>

                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light">
                      <div className="card-body">
                        <img src={mf2} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Blue Jeans</h5>

                  </div>

                  <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light">
                      <div className="card-body">
                        <img src={wf1} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Magenta Embroidered Kurta</h5>

                  </div>

                  <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light">
                      <div className="card-body">
                        <img src={bf1} className="img-fluid" alt="Feautred 01" />
                      </div>
                    </div>
                    <h5>Punjabi</h5>

                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
 

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mx-auto text-center">
                <h1>Join Our Community!</h1>
                <br></br>
                <br></br>
              </div>
            </div>


            <div className="col-lg-12">
              <div className="row">

                <div className="col-lg-3">
                  <h4>Contact</h4>
                  <p className="align-middle"><ContactMailIcon /> Mail us: onlineclothbd@gmail.com</p>
                  <p className="align-middle"><PhoneIcon /> Phone: 012345678963</p>
                </div>

                <div className="col-lg-3">
                  <h4>Company</h4>
                  <p><Button variant="text" className="btn2" onClick={event => window.location.replace("/AboutUs")}>About Us</Button></p>
                </div>
              </div>
            </div>

          </div>
        </section>



      </div>

    );
  }
}
