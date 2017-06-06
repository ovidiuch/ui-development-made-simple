import React, { Component } from 'react';
import { string } from 'prop-types';
import Presentation from './Presentation';

export default class Slide extends Component {
  render() {
    const { content, credits } = this.props;
    return (
      <div className="root">
        <div className="content box">
          {content}
        </div>
        {credits && (
          <div className="credits box">
            twitter.com/<strong>skidding</strong>
          </div>
        )}
        <style jsx>{`
          .root {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .box {
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.85);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            text-align: center;
            white-space: nowrap;
          }
          .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            height: 192px;
            padding: 8px 32px 0 32px;
            color: #101112;
            font-size: 128px;
            font-weight: bold;
            line-height: 192px;
          }
          .credits {
            position: absolute;
            bottom: 48px;
            left: 50%;
            transform: translate(-50%, 0) scale(1);
            padding: 24px 32px;
            color: rgba(16, 17, 18, 0.6);
            font-size: 64px;
            font-weight: 300;
            line-height: 64px;
          }
          .credits strong {
            color: rgba(16, 17, 18, 1);
            font-weight: 400;
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
