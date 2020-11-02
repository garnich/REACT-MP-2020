import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './App';

function renderHTML(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NetflixRoulette</title>
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
            <link rel="icon" href="/favicon.ico">
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/main.js"></script>
            </body>
        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        // This context object contains the results of the render
        const context = {};

        const renderRoot = () => (
        <App
            context={context}
            location={req.url}
            Router={StaticRouter}
            store={store}
        />
        );

        renderToString(renderRoot());

        // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }
  
      const htmlString = renderToString(renderRoot());
      const preloadedState = store.getState();
  
      res.send(renderHTML(htmlString, preloadedState));
    };
}
