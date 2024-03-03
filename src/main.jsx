import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import AuthProvider from './components/Provider/AuthProvider';
import Register from './components/Register/Register';
import Posts from './components/Posts/Posts';
import PrivateRoute from './components/Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <PrivateRoute><Posts></Posts></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
