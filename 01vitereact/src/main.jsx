import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <h1>This is my App</h1>
  )
}
//  const reactElement = {
//   type:"a",
//   props: {
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target = "_blank">Visit Google</a>
// )
const username = "Jeet Yadav"
const reactElement = React.createElement(
  'a',
  {href:"https:google.com",target:"_blank"},
  "Click me to visit Google",
  username

)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App /> 
    // reactElement
  // </StrictMode>,
  // anotherElement
  // reactElement
)
