import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FontIcons extends Component {
    render() {
        return (
        	<Container>
        		<Row>
        			<Col>
        				 <FontAwesomeIcon icon="igloo" />
        				 <FontAwesomeIcon icon="igloo" />
        				 <FontAwesomeIcon icon="igloo" />
        				 <FontAwesomeIcon icon="igloo" />
        				 <FontAwesomeIcon icon="igloo" />
        			</Col>
        		</Row>
        	</Container>

        );
    }
}

export {FontIcons};