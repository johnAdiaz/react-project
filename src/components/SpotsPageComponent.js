import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { SPOTS } from '../shared/spots.js';
//import SpotInfo from './SpotInfoComponent';

class SpotPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: SPOTS,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    render() {
        const spots = this.state.spots.map(spot => {
            return(
                <div key={spot.id} className="col-md-4">
                    <Card onClick={this.toggleModal} id="spotListing">
                        <CardImg height="100%" src={spot.image} alt={spot.name} />
                        <CardBody>
                            <CardTitle>{spot.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });


        return(
            <div className="container">
                <div className="row">
                    spot box?
                </div>
                <div className="row">
                    {spots}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Spot Title</ModalHeader>
                        <ModalBody>
                           <p>Spot Picture</p>
                           <p>Description</p>
                           <p>Address</p>
                        </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SpotPage;