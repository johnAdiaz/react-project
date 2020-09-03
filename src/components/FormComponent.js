import React, { Component } from 'react';
import {Container, Row, Col, Button, Label, Input, Form, FormGroup } from 'reactstrap';

export default class SignUp extends Component {
    render() {
        return(
                <Container fluid>
                    <Row id="signUpForm">
                        <Col className="my-auto text-center" sm={12} md={5} > 
                            <h1><em>join our community</em></h1>
                        </Col>
                        <Col className="my-auto" >
                            <Form>
                                <Row>
                                    <FormGroup className="col-md-6">
                                        <Label for="firstName">First Name</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </FormGroup>
                                    <FormGroup className="col-md-6">
                                        <Label for="lastName">Last Name</Label>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Last Name" /> 
                                    </FormGroup>
                                    <FormGroup className="col-md-6">
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Email Address" />
                                    </FormGroup>
                                    <FormGroup className="col-md-6">
                                        <Label for="Password">Password</Label>
                                        <Input type="password" name="password" id="Password" placeholder="Password" />
                                    </FormGroup>
                                </Row>
                                <Row className="form-group">
                                <Col>
                                    <Button type="submit" id="buttonChange">
                                        join
                                    </Button>
                                </Col>
                            </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
        );
    }
}
