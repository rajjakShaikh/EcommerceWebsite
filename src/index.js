import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <Auth0Provider
  domain="dev-w1n0jm8yno1gonhi.us.auth0.com"
  clientId="yfiWzXWAnTArIHPNEO1BMZWR6eCsbaPl"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
 

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
<script src="https://kit.fontawesome.com/b6d957f8f4.js" crossorigin="anonymous"></script>

    <App />
</Auth0Provider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
