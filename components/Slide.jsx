import React, { Component } from 'react';
import { string } from 'prop-types';
import Presentation from './Presentation';

export default class Slide extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="root">
        <div className="content">
          {content}
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
            height: 192px;
            box-sizing: border-box;
            padding: 8px 32px 0 32px;
            background-color: rgba(255, 255, 255, 0.85);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            color: #101112;
            font-size: 128px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: bold;
            line-height: 192px;
            text-align: center;
            white-space: nowrap;
          }
          @media (-webkit-max-device-pixel-ratio: 1) {
            .content {
              /* Emojis render up to 256px on normal screens and 128px on retina */
              transform: translate(-50%, -50%) scale(2);
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
