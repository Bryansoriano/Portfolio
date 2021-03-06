import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Breakpoint, BreakpointProvider } from 'react-socks'
import App from './App'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <BreakpointProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
        </BreakpointProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
