import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/app/App';

                


// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );
ReactDOM
        .createRoot(document.getElementById('root'))
        .render(<React.StrictMode>
                  <App/>
                </React.StrictMode>)


