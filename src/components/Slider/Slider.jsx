import React, { Component } from 'react';
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import education from '../../../assets/images/Slider/education.jpg';
import dance from '../../../assets/images/Slider/dance.jpg';
import knitting from '../../../assets/images/Slider/knitting.jpg';
import painting from '../../../assets/images/Slider/painting.jpg';
import sport from '../../../assets/images/Slider/sport.jpg';


const items = [
    {
        src: education,
        altText: 'Կրթություն',
        caption: 'Կրթություն'
    },
    {
        src: dance,
        altText: 'Արվեստ',
        caption: 'Արվեստ'
    },
    {
        src: knitting,
        altText: 'Այլ',
        caption: 'Այլ'
    },
    {
        src: painting,
        altText: 'Արվեստ',
        caption: 'Արվեստ'
    },
    {
        src: sport,
        altText: 'Սպորտ',
        caption: 'Սպորտ'

    }
];

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    onExiting() {
        this.animating = true;
    }
    onExited() {
        this.animating = false;
    }
    next() {
        if (this.animating) {return;}
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous() {
        if (this.animating) {return;}
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    goToIndex(newIndex) {
        if (this.animating) {return;}
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img className="d-block w-100" height="500" src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return (
            <Container>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </Container>
        );
    }
}

export {Slider};