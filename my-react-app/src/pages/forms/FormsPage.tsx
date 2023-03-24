import { PageTitleProps } from 'models/models';
import React, { Component } from 'react';
import './FormsPage.css';

export class FormsPage extends Component<PageTitleProps> {
  componentDidMount() {
    this.props.setTitle('Forms page');
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Forms page</h1>
      </div>
    );
  }
}
