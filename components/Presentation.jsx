import React, { Component } from 'react';
import Slide from './Slide';

const { max, min } = Math;

const LEFT = 37;
const RIGHT = 39;

// Use `keydown` for debugging and `keyup` when presenting!
const KEY_EVENT = 'keydown';

export default class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: 0,
    };
  }

  componentDidMount() {
    window.addEventListener(KEY_EVENT, this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener(KEY_EVENT, this.onKeyPress);
  }

  prev() {
    this.setState(({ slide }) => ({
      slide: max(0, slide - 1),
    }));
  }

  next() {
    const { slides } = this.props;

    this.setState(({ slide }) => ({
      slide: min(slide + 1, slides.length - 1),
    }));
  }

  onKeyPress = e => {
    switch (e.keyCode) {
      case LEFT:
        this.prev();
        break;
      case RIGHT:
        this.next();
        break;
      default:
    }
  };

  onClick = () => {
    this.next();
  };

  render() {
    const { slides } = this.props;
    const { slide: slideIndex } = this.state;
    const slide = slides[slideIndex];

    if (!slide) {
      return <div>404</div>;
    }

    return (
      <div className="root" onClick={this.onClick}>
        <Slide {...slide} />
        <style jsx>{`
          .root {
            position: absolute;
            width: 100%;
            height: 100%;
            user-select: none;
          }
        `}</style>
      </div>
    );
  }
}
