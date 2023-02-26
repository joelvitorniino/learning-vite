import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Heading from './components/Heading'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Heading>Hello, World!</Heading>
  </React.StrictMode>
)
