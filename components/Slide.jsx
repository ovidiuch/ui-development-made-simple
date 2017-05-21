import React, { Component } from 'react';
import { string } from 'prop-types';
import { emojify } from 'react-emojione';
import Presentation from './Presentation';

export default class Slide extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="root">
        <div className="content">
          {emojify(content, { output: 'unicode' })}
        </div>
        <style jsx>{`
          .root {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 256px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            white-space: nowrap;
          }
          @media (-webkit-min-device-pixel-ratio: 2) {
            .content {
              font-size: 128px;
            }
          }
        `}</style>
      </div>
    );
  }
}

Slide.propTypes = {
  content: string.isRequired,
};
