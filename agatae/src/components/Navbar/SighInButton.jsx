import {SignIn} from './SignIn';
import React, { Component } from 'react';
import  { ButtonToolbar, Button } from 'reactstrap';

class SighInButton extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Button
          variant="dark"
          onClick={() => this.setState({ modalShow: true })}
        >
          Login
        </Button>

        <SignIn
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}
export {SighInButton};