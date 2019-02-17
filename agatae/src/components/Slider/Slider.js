import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'http://doctrinavita.ru/pluginfile.php/2/course/section/2/Top-Vakansii-na-2011-god-v-stranah-SNG-Ukraina-Rossija-Belorussija.jpg',
    altText: 'Կրթություն',
    caption: 'Կրթություն'
  },
  {
    src: 'https://cs5.pikabu.ru/post_img/big/2015/09/23/10/1443024916_311901261.jpg',
    altText: 'Արվեստ',
    caption: 'Slide 2'
  },
  {
    src: 'www.meme-arsenal.com/memes/a3fca2bf83160db761a707ad59579e0b.jpg',
    altText: 'Սպորտ',
    caption: 'Սպորտ'
  },
  {
    src: 'https://ec.europa.eu/sport/sites/sport/files/erasmus-plus-sport.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
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
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
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
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
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
    );
  }
}


export {Slider};
