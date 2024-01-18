/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Users, UsersDashboard } from './sections';
import Sidebar from './sections/sidebar/Sidebar';
import './reset.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const AppLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    { 
        element : <AppLayout />,
        children : [
            { 
                path    : '/',
                element : <Users />
            },
            { 
                path    : '/users-dashboard',
                element : <UsersDashboard />
            },
            { 
                path    : '/user-edit/:id',
                element : <Users />
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router = { router }/>
    </React.StrictMode>,
);
