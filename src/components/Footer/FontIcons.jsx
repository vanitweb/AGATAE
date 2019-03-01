import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ftrStyle from '../../../assets/styles/Footer/footer.module.css';

class FontIcons extends Component {
    render() {
        return (
        	<Container>
        		<Row>
        			<Col className={ftrStyle.icons}>
        				 <FontAwesomeIcon icon="igloo" className={ftrStyle.item} />
        				 <FontAwesomeIcon icon="anchor" className={ftrStyle.item} />
        				 <FontAwesomeIcon icon="plane" className={ftrStyle.item} />
        				 <FontAwesomeIcon icon="ad" className={ftrStyle.item} />
        				 <FontAwesomeIcon icon="feather-alt" className={ftrStyle.item} />
        			</Col>
        		</Row>
        	</Container>

        );
    }
}

export {FontIcons};