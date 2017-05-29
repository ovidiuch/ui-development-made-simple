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
            width: 384px;
            height: 384px;
            box-sizing: border-box;
            padding-top: 8px;
            background-color: rgba(255, 255, 255, 0.85);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
            border-radius: 24px;
            color: @text-color;
            font-size: 256px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            text-align: center;
            line-height: 384px;
            white-space: nowrap;
          }
          @media (-webkit-min-device-pixel-ratio: 2) {
            .content {
              width: 192px;
              height: 192px;
              font-size: 128px;
              line-height: 192px;
              border-radius: 12px;
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
