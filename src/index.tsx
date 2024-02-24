import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Finalize from './routes/finalize/Finalize';
import Results from './routes/results/Results';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: "finalize/:testId",
    element: <Finalize/>
  },
  {
    path: "results/:testId",
    element: <Results/>
  }
])

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <RouterProvider router={router}/>
);

reportWebVitals();