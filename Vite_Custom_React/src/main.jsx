import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// A simple component
function Apps() {
  return (
    <div>Vishal tamhane</div>
  )
}

/*
❌ This object looks like a React element, but it's NOT valid for rendering.
   - React expects elements created via JSX or React.createElement.
   - This is just a plain JavaScript object — it won’t be understood by the renderer.
   - It lacks the internal structure (like $$typeof, etc.) that real React elements have.

const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank'
  },
  children: 'Google'
};
*/

/*
✅ This is the correct way to create a React element without JSX.
   - React.createElement generates a real React element that can be rendered.
   - This works exactly the same as writing: <a href="..." target="_blank">Visit google</a>
*/
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Visit google'
)

// Rendering all components and the dynamically created anchor element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}  {/* ✅ Valid React element created with React.createElement */}
    <App />
    <Apps />
  </StrictMode>
)
