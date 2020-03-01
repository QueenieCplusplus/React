# React

![reactapp](https://hookey.cc/assets/img/eb4bf849ad09c85747300fa7775f6c5b.png)


> JSX
  
  <https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project>

> use an integrated toolchain that includes JSX 
      
  <https://reactjs.org/docs/create-a-new-react-app.html>

> use React without JSX, in which case you can remove Babel:
      
  <https://reactjs.org/docs/react-without-jsx.html>
  
  # Install 
  
  > npm
  
      $npm install --save react react-dom 
      
      + react@16.13.0
      + react-dom@16.13.0
      
      $npm install babel
      + babel@6.23.0
  
  
  # Setup in code
  
  > JS
  
      <script type="text/javascript" src="/path/to/react.js"></script> 
      <script type="text/javascript" src="/path/to/react-dom.js"></script> 
      <script type="text/javascript">
      
  > JSX with Babel
  
      <script type="text/javascript" src="/path/to/react.js"></script>
      <script type="text/javascript" src="/path/to/react-dom.js"></script> 
      <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script> 
      <script type="text/babel">
      
# Stateless is better than Stateful (causes side-effect)
>
stateless func is always will return the same values given to varivales.
However, stateful function will not return the same values given even no param. This type of function's behaviour is also called as a side-effect. 

> Stateful makes maintanance difficult
So, it is advised to use stateless components more often, since they are side-effect free and will create the same behaviour always. That is what you want to be after in your apps because fluctuating state is the worst case scenario for a maintainable program.

> Sateless Components with its props provided by React
The most basic type of react component is one without state!
React components that are pure functions of their props and do not require any internal state management. These are said to be Stateless Functional Components because they are a function only of props, without having any state to keep track of.

# Create React App

    $npm install -g create-react-app
    + create-react-app@3.4.0
    
> after cd to working dir, then

    $create-react-app my-app
    
> cd to my-app. then start it

    $npm start
    Installing react, react-dom, and react-scripts with cra-template...
    + react-dom@16.13.0
    + react@16.13.0
    + react-scripts@3.4.0
    + cra-template@1.0.2
    
# CLI

  cd qsreactapp

*npm start

    Starts the development server.
    Local:            http://localhost:3000
    On Your Network:  http://192.168.100.24:3000
    
    
![start dev server](https://i.imgur.com/OXMkiOX.png)

    ? Something is already running on port 3000. Probably:
      qsreactapp (pid 3096)
      in /Users/pintred/Desktop/qsreactapp

    Would you like to run the app on another port instead? (Y/n) Y
    Starts the development server.
    Local:            http://localhost:3001
    On Your Network:  http://192.168.100.24:3001

*npm run build

    Bundles the app into static files for production.

*npm test

    Starts the test runner.

*npm run eject

    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
    
# App Files

    qsreactapp/.gitignore
 
              /README.md
 
              /package-lock.json
              /package.json

              /public/favicon.ico
                     /index.html
                     /logo192.png
                     /logo512.png
                     /manifest.json
                     /robots.txt
                     
              /src/App.css
                  /App.js
                  /App.test.js
                  /index.css
                  /index.js. 
                  /logo.svg
                  /serviceWorker.js
                  /setupTests.js
                  
           (+)/index.js 
 
# App Structure

    qsreactapp ------| package.json (dependency mgmt)
    
               ------ Routes.js (New File Created by developer)
               
               ------ index.js (New File Created by developer)
           
               ------| src | ------ App.js (app wrapper)
               
                           | ------ index.js (code)
                           
                           | ------ index.css
                           
                           | ------ image.svg
                           
               ------| public | ------ manifest.json
               
                              | ------ index.html (render)
                              
                              | ------ favicon.ico

# Service Worker (js) as Config file

    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    export function register(config) {
      if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
          // Our service worker won't work if PUBLIC_URL is on a different origin
          // from what our page is served on. This might happen if a CDN is used to
          // serve assets; see https://github.com/facebook/create-react-app/issues/2374
          return;
        }

        window.addEventListener('load', () => {
          const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

          if (isLocalhost) {
            // This is running on localhost. Let's check if a service worker still exists or not.
            checkValidServiceWorker(swUrl, config);

            // Add some additional logging to localhost, pointing developers to the
            // service worker/PWA documentation.
            navigator.serviceWorker.ready.then(() => {
              console.log(
                'This web app is being served cache-first by a service ' +
                  'worker. To learn more, visit https://bit.ly/CRA-PWA'
              );
            });
          } else {
            // Is not localhost. Just register service worker
            registerValidSW(swUrl, config);
          }
        });
      }
    }

    function registerValidSW(swUrl, config) {
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the updated precached content has been fetched,
                  // but the previous service worker will still serve the older
                  // content until all client tabs are closed.
                  console.log(
                    'New content is available and will be used when all ' +
                      'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                  );

                  // Execute callback
                  if (config && config.onUpdate) {
                    config.onUpdate(registration);
                  }
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // "Content is cached for offline use." message.
                  console.log('Content is cached for offline use.');

                  // Execute callback
                  if (config && config.onSuccess) {
                    config.onSuccess(registration);
                  }
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
    }

    function checkValidServiceWorker(swUrl, config) {
      // Check if the service worker can be found. If it can't reload the page.
      fetch(swUrl, {
        headers: { 'Service-Worker': 'script' }
      })
        .then(response => {
          // Ensure service worker exists, and that we really are getting a JS file.
          const contentType = response.headers.get('content-type');
          if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)
          ) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister().then(() => {
                window.location.reload();
              });
            });
          } else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
          }
        })
        .catch(() => {
          console.log(
            'No internet connection found. App is running in offline mode.'
          );
        });
    }

    export function unregister() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
          .then(registration => {
            registration.unregister();
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
    
# routes.js (new file), code way see

<https://github.com/QueenieCplusplus/React/blob/master/useful_syntax/router.pdf>

> pkg

    $npm install react-router
    + react-router@5.1.2
    
> Routes.js in Root Dir

    import React from 'react';
    import { Route, IndexRoute } from 'react-router';
    import App from './src/App';
    import index from './src/index';
    import queens from './src/queens';

    export default(
        <Route path="/" component={App}>
          <IndexRoute component={index}/>
          <Route path="/queen/20200301" component={queens}/>
        </Route>
    );

# index.js as Entry Point to render Routers Component

import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
    
# src/index.js as Target Container for App

    import React from 'react';
    import ReactDOM from 'react-dom';

    import './index.css';
    import App from './App';

    import * as serviceWorker from './serviceWorker';

    ReactDOM.render(<App />, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
    
# App.js as SRC srcipt code for logic (Container)

    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }

    export default App;


# index.html as render

    <!DOCTYPE html>
    <html lang="en">

      <head>

        <meta charset="utf-8" />

        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      </head>

      <body>

        <noscript>You need to enable JavaScript to run this app.</noscript>

        <div id="root"></div>

      </body>

    </html>
