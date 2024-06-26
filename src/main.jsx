import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx"; 
import Print from "./components/Print.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-invoice", element: <Print/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
