import React from 'react'
import './App.pcss'
import {LoginPage} from "./pages/loginPage.tsx";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {AppRoutes} from "./routes.tsx";
import {RegisterPage} from "./pages/registerPage.tsx";
import {PostsPage} from "./pages/postsPage.tsx";
import Cookies from "js-cookie";

export const App: React.FC = () => {
  const publicRouter = createBrowserRouter([
    {path: AppRoutes.home, element: <LoginPage />},
    {path: AppRoutes.register, element: <RegisterPage />}
  ]);
  const privateRouter = createBrowserRouter([
    {path: AppRoutes.home, element: <PostsPage />},
  ]);
  return <RouterProvider router={Cookies.get('Logged') == "y"?privateRouter:publicRouter} />;
  //return <RouterProvider router={privateRouter} />;
}

