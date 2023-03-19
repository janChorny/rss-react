import { PageTitleProps } from 'models/models';
import React, { Component } from 'react';
import './NotFoundPage.css';

export class NotFoundPage extends Component<PageTitleProps> {
  componentDidMount() {
    this.props.setTitle('Not found page');
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Not found page</h1>
      </div>
    );
  }
}
