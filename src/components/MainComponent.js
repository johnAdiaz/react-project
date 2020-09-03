import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import WelcomePage from './WelcomePage';
import { SPOTS } from '../shared/spots';
import SpotPage from './SpotsPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            spots: SPOTS
        }
    }

    render() {

        const HomePage = () => {
            return (
                <WelcomePage />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path='/spots' render={() => <SpotPage />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default (Main);