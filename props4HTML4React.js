import React from 'react'

// Note that all that this component does is render an p element containing the name prop. 
// This component doesn't keep track of any state. 

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ｑueenie's React Journey</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- option -->
    <!-- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>  -->
  </head>


  <body>
    <div id="queens_element"> </div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Ｑueenie's Journey!</h1>,
        document.getElementById('queens_element')
      );

    </script>
  </body>
</html>

//js code 
//state mgmt by using props
const QsComponent = props => {
  return <p> This is my 1st {props.suprise} app !</p>
};

//mapping with code & html
//ReactDOM.render( <function_name with its props/>, html tag id) 
ReactDOM.render(<QsComponent suprise="NewReact"/>, queens_element)