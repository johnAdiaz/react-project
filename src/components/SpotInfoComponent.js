import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class SpotInfo extends Component {
    renderSpot(spot) {
        return(
            <div key={spot.id} className="col-md-4">
                <Card>
                    <CardImg top src={spot.image} alt={spot.name} />
                    <CardBody>
                        <CardTitle>{spot.name}</CardTitle>
                        <CardText>{spot.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderInfo(spot) {
        return(
            <div className="col-md-4" key={spot.id}>
                <ul>
                    <li><h3>{spot.name}</h3></li>
                    <li>{spot.address}</li>
                    <li>{spot.description}</li>
                </ul>
            </div>
        );      
    }

    render() {
        if (this.props.spot) {
            return (
                    <div className="row">
                        {this.renderSpot(this.props.spot)}
                        {this.renderInfo(this.props.spot.name)}
                    </div>
            )
        } else {
            return (
                    <div>
                        
                    </div>
            )
        }  
    }
}

export default SpotInfo;