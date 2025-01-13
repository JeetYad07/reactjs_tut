import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
 function MyApp(){
  return (
    <h2>This is my app in create react</h2>
  )
 }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <App /> 
    // <MyApp />
    // <reactElement />
    // reactElement
  // </Reacxt.StrictMode>
);


