import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";


import App from './components/App';

const app = express();

const context = {
  name: 'Vitor'
};

const template  = (component) => {
  return  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${component}
  </body>
  </html>`;
}


app.get('/*', (req, res)=> {

  res.send(template(ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )));
});

app.listen(3002, () => {
  console.log('Server is running!');
});