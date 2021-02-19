
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './src/index.css'; Activar al tener contenido en archivo index.css
import App from './src/App';
//import reportWebVitals from './src/reportWebVitals'; Activar cuando haya contendio en reportWeVitals

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

