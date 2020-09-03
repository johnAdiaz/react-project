import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import SignUp from './FormComponent';


class WelcomePage extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col">
                                <h1>welcome to skate dfw</h1>
                                <p class="lead">This site serves as a hub for great skate spots in our communities, brings us together for competitive events, and hopefully helps you meet new people.</p>
                                <Button href="/spots" id="buttonChange">spots</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Container id="infoBox" fluid>
                    <Row className="text-center">
                        <Col xs="12" sm="6" md="4">
                            <i class="fa fa-map-marker" id="iconChange"></i>
                            <h3>spots</h3>
                            <p>Find new spots with our map.</p>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                            <i class="fa fa-calendar" id="iconChange"></i>
                            <h3>events</h3>
                            <p>Weekly competitions and other events.</p>
                        </Col>
                        <Col sm="12" md="4">
                            <i class="fa fa-user-plus" id="iconChange"></i>
                            <h3>community</h3>
                            <p>Connect with others.</p>
                        </Col>
                    </Row>
                </Container>
                <SignUp />   
            </React.Fragment>
        );
    }
}
export default WelcomePage;