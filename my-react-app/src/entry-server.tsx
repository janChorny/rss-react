import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { store } from './store/store';

export function render(url: string, options: ReactDOMServer.RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
}
