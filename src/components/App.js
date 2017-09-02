import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Nabbar from './navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Nabbar/>
        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
