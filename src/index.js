import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way of programming "
h1.className = "header"
document.getElementById('root').append(h1)*/
function tempname(){
    return ( <nav>
        <h1>Bob's shop</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( tempname());

;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
