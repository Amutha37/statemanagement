// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// // ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App1'
// import "./index.css";
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </Provider>
)
