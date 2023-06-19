import { PageTitleProps } from 'models/models';
import React, { useEffect } from 'react';
import './NotFoundPage.css';

export function NotFoundPage(props: PageTitleProps) {
  useEffect(() => {
    props.setTitle('Not found page');
  });

  return (
    <div>
      <h1 className="page-header">Not found page</h1>
    </div>
  );
}
