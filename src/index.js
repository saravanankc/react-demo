import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MyApp from './MyApp';
import * as serviceWorker from './serviceWorker';


const render = () => {

  // This is simple HTML binding to div tag and gets overwritten to DOM when refreshed on interval
  document.getElementById("indexPageMountNode").innerHTML = `
    <div>Simple HTML for comparing with REACT TreeReconciliation</div>
    <input style='width:50%' placeholder='this input type is simple HTML input and cannot be edited as DOM is overwritten!'/>
    <pre>${(new Date()).toLocaleTimeString()}</pre>
  `;

  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <MyApp />
    </React.StrictMode>,
    document.getElementById('root')
  )
}


setInterval(render, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
