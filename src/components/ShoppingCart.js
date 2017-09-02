import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as selectors from '../reducers';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({items, removedCart}) => {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {items.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>

                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removedCart(product.id)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${items.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }


const mapStateToProps = (state) => ({
    items: selectors.getItems(state)
});

export default connect(mapStateToProps, actions) (ShoppingCart);
