import React, { Component } from 'react';
import {
	Container,
	Row,
	Col
	} from 'reactstrap';

import {Logo} from '../Header/Logo';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Logo />
                    </Row>
                </Container>
            </footer>
        );
    }
}
export {Footer};