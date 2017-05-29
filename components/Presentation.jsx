import React, { Component } from 'react';
import Slide from './Slide';
import starryBg from '../starry-bg';

const { max, min, abs } = Math;

const LEFT = 37;
const RIGHT = 39;

// Use `keydown` for debugging and `keyup` when presenting!
const KEY_EVENT = 'keydown';

// How much time (ms) to keep mouse pressed to go back instead of forward
const GO_BACK_TIMEOUT = 300;

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

  onMouseDown = () => {
    this.clickTimeout = setTimeout(() => {
      this.setState({ goingBack: true });
    }, GO_BACK_TIMEOUT);
  };

  onMouseUp = () => {
    clearTimeout(this.clickTimeout);

    // Go back by holding and releasing
    if (this.state.goingBack) {
      this.prev();
      this.setState({
        goingBack: false,
      });
    } else {
      this.next();
    }
  };

  render() {
    const { slides } = this.props;
    const { slide: slideIndex, goingBack } = this.state;
    const slide = slides[slideIndex];

    if (!slide) {
      return <div>404</div>;
    }

    return (
      <div
        className="root"
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        <div
          className="stars"
          style={{
            backgroundImage: `url(${starryBg})`,
          }}
        />
        <div
          style={{
            opacity: goingBack ? 0.5 : 1,
          }}
        >
          <Slide {...slide} />
        </div>
        <style jsx>{`
          .root {
            position: absolute;
            width: 100%;
            height: 100%;
            user-select: none;
            background: #081b29;
            overflow: hidden;
          }
          .stars {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 300%;
            height: 300%;
            min-width: 4000px;
            min-height: 2750px;
            background-position: center center;
            animation: stars-ani 200s linear infinite;
          }
          @keyframes stars-ani {
            0% {
              transform: translateY(0) translateX(0);
            }
            100% {
              transform: translateY(1372px) translateX(2000px);
            }
          }
        `}</style>
      </div>
    );
  }
}
