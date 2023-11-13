import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './layouts/routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-full mx-auto font-inter-font'>
      <RouterProvider router={Routes} />
    </div>
  </React.StrictMode>,
)
