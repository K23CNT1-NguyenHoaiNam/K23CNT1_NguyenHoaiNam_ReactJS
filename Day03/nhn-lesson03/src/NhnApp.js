import React, { Component } from 'react';
import NhnJsxExpression from './components/NhnJsxExpression';

class NhnApp extends Component {
  render() {
    return (
      <div className="container border mt-3 bg-white">
          <h1>React JS Lesson03 - Nguyễn Hoài Nam</h1>

          <NhnJsxExpression />
      </div>
    );
  }
}

export default NhnApp;