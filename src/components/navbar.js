import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

class Nabbar extends Component{
    render(){
        return (
            <div>

                <Navbar inverse staticTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Ecommerce</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

            </div>
        )
    }
}

export default Nabbar

