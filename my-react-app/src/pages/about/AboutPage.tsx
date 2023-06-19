import { PageTitleProps } from 'models/models';
import React, { Component } from 'react';
import './AboutPage.css';

export class AboutPage extends Component<PageTitleProps> {
  componentDidMount() {
    this.props.setTitle('About page');
  }

  render() {
    return (
      <div>
        <h1 className="page-header">About page</h1>
      </div>
    );
  }
}
