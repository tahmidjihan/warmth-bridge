import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import AuthProvider from './authProvider.jsx';
import Campaigns from './pages/campaigns.jsx';
import Campaign from './pages/campaign.jsx';
import Dashboard from './pages/Dashboard.jsx';
import UpdateProfile from './pages/updateProfile.jsx';
import ForgotPassword from './pages/forgotPassword.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/login/forgot-password',
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: '/campaigns',
        element: <Campaigns></Campaigns>,
      },
      {
        path: '/campaigns/:id',
        element: <Campaign></Campaign>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboard/updateProfile',
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
