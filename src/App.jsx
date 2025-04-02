import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Common/Header';
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
