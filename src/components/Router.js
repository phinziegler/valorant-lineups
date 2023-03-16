import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maps from '../Maps';
import '../css/App.css';


export default function Router() {

    const router = createHashRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: Maps.ICEBOX,
                    element: <Map map={Maps.ICEBOX} />,
                }, {
                    path: Maps.ASCENT,
                    element: <Map map={Maps.ASCENT} />,
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}