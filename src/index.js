import './App.css';
import React from "react";
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/history" element={<History />} />
              <Route path="/left" element={<Left />} />
              <Route path="/right" element={<Right />} />
              <Route path="/bothsides" element={<Both />} />
            </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </ProSidebarProvider>
  );
};

const rootElement = ReactDOM.createRoot(  document.getElementById("root") )
rootElement.render(<App />);
