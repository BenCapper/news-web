import './App.css';
import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Home from './pages/home';
import Saved from './pages/saved';
import History from './pages/history';
import Both from './pages/bothsides';
import Right from './pages/right';
import Left from './pages/left';
import Login from './pages/login';
import AuthContextProvider from './contexts/authContext';
import ProtectedRoutes from './pages/protectedRoutes';
import theme from './contexts/theme';
import ThemeContext from './contexts/themeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {


  return (
    <ProSidebarProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ThemeContext.Provider value={theme}>
      <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/left" element={<Left />} />
              <Route path="/right" element={<Right />} />
              <Route path="/bothsides" element={<Both />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/saved" element={<Saved />} />
                <Route path="/history" element={<History />} />
              </Route>
            </Routes>
      </AuthContextProvider>
      </ThemeContext.Provider>
      </BrowserRouter>
    </QueryClientProvider>
    </ProSidebarProvider>
  );
};


const rootElement = ReactDOM.createRoot(  document.getElementById("root") )
rootElement.render(<App />);
