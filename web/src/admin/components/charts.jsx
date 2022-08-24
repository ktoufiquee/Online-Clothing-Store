import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import "./../../styles/charts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default class charts extends Component {
  render() {
    return (
      <Row>
        <Col lg = {4} md = {6} sm = {12} className="g-4">
            <Card>
                <Stack>
                    <div className= "heading">Total Profits</div>
                </Stack>
            </Card>
        </Col>
      </Row> 
    )
  }
}
