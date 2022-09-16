import React from "react";
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
const Task = React.lazy(() => import("Task/Task"));
const Process = React.lazy(() => import("Process/Process"));
const Forms = React.lazy(() => import("Forms/Forms"));
const Dashboard = React.lazy(()=>import("Dashboards/Dashboards"));
const Applications = React.lazy(()=>import("Applications/Applications"));
const Admin = React.lazy(()=>import("Admin/Admin"));
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },{
        path: "/task",
        element: <React.Suspense fallback={<div>Loading...</div>}><Task /></React.Suspense>,
    },{
        path: "/process",
        element: <React.Suspense fallback={<div>Loading...</div>}><Process /></React.Suspense>,
    },{
        path: "/forms",
        element: <React.Suspense fallback={<div>Loading...</div>}><Forms /></React.Suspense>,
    },{
        path: "/dashboard",
        element: <React.Suspense fallback={<div>Loading...</div>}><Dashboard /></React.Suspense>,
    },{
        path: "/applications",
        element: <React.Suspense fallback={<div>Loading...</div>}><Applications /></React.Suspense>,
    },{
        path: "/admin",
        element: <React.Suspense fallback={<div>Loading...</div>}><Admin /></React.Suspense>,
    }
    
  ]);
const container = document.getElementById('root');
const root = createRoot(container!);
root.render( <RouterProvider router={router} />);
