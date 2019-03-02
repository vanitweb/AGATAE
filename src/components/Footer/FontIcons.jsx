import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ftrStyle from '../../../assets/styles/Footer/footer.module.css';

class FontIcons extends Component {
    render() {
        return (
        	<Container>
        		 <Row className="justify-content-md-center">
        			<Col className={ftrStyle.icons}>
                         <FontAwesomeIcon icon={['fab', 'facebook-square']} className={ftrStyle.item} />
                         <FontAwesomeIcon icon={['fab', 'instagram']} className={ftrStyle.item} />
                         <FontAwesomeIcon icon={['fab', 'vk']} className={ftrStyle.item} />
                         <FontAwesomeIcon icon={['fab', 'youtube']} className={ftrStyle.item} />
        			</Col>
        		</Row>
        	</Container>

        );
    }
}

export {FontIcons};