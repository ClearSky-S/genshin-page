import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import CharacterSelection from "./routes/character-selection"
import Characters from "./routes/characters";
import Elements from "./routes/elements";
import Nations from "./routes/nations";
import Weapons from "./routes/weapons";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "characters",
        element: <CharacterSelection />,
      },
      {
        path: "characters/:characterSlug",
        element: <Characters />,
      },
      {
        path: "elements/:elementId",
        element: <Elements />,
      },
      {
        path: "nations/:nationId",
        element: <Nations />,
      },
      {
        path: "weapons",
        element: <Weapons />,
      },
      {
        path: "weapons/:weaponId",
        element: <Weapons />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
