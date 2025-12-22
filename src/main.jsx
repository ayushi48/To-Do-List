// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./Store"; // ✅ your redux store file
// import App from "./App";
// import "./index.css"; // optional, for styling

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </React.StrictMode>
// );

//********************************************************************************************************************************** */


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store"; // ✅ your redux store file
import App from "./App";
import "./index.css"; // optional, for styling

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
