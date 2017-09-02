import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import configureStore from '../configureStore'
import {addCart} from '../actions'
import * as actions from '../actions'
import * as selectors from '../reducers';
import {connect} from 'react-redux'

const store = configureStore();

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

const ProductList = ({products, addCart}) => {
    return (
      <div style={styles.products}>
        {products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => addCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}


const mapStateToProps = (state) => ({
  products: selectors.getProducts(state)
});

export default connect(mapStateToProps, actions)(ProductList);
