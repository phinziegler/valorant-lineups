import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';
import Icebox from './Icebox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maps from '../Maps';
import '../css/App.css';


export default function Router() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: Maps.ICEBOX,
                    element: <Icebox />,
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}