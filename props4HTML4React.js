import React from 'react'

//Note that all that this component does is render an p element containing the name prop. 
//This component doesn't keep track of any state.

//------------------------------------

//<!DOCTYPE html>

<html>

  <head>
    <meta charset="UTF-8" />
    <title>Ｑueenie's React Journey</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 
  </head>


  <body>
    <div id="queenselement"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>C'est La Ｑueenie's React Journey!</h1>,
        document.getElementById('queens_element')
      );

    </script>
  </body>

</html>

//------------------------------------

//js code 
//state mgmt by using props 
// const fun_name = p => { html tag with ps property and its value}
const QsComponent = props => {
  return <p> This is my 1st {props.thing} app !</p>
};

// mapping with code & html 
// ReactDOM.render( <function_name with its props property & value />, html tag id)
ReactDOM.render(<QsComponent thing="NewReact"/>, queens_element)