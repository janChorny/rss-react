import { PageTitleProps } from 'models/models';
import React, { useEffect } from 'react';
import './AboutPage.css';

export function AboutPage(props: PageTitleProps) {
  useEffect(() => {
    props.setTitle('About page');
  });

  return (
    <div>
      <h1 className="page-header">About page</h1>
    </div>
  );
}
