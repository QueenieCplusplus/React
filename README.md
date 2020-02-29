# React

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



