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
import themes from './contexts/darktheme';
import ThemeContext from './contexts/themeContext';
import Gript from './pages/gript';
import Rte from './pages/rte';
import Spiked from './pages/spiked';
import Gbn from './pages/gbn';
import Sky from './pages/sky';
import Guardian from './pages/guardian';
import Dmail from './pages/dmail';
import Sceptic from './pages/sceptic';
import Blaze from './pages/blaze';
import Timcast from './pages/timcast';
import Breitbart from './pages/breit';
import Info from './pages/infowars';

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
  const [theme, setTheme] = useState(themes);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ThemeContext.Provider value={theme}>
      <AuthContextProvider>
      <ProSidebarProvider>
            <Routes>
              <Route path="/" element={<Home setTheme={setTheme} />} />
              <Route path="/login" element={<Login setTheme={setTheme}/>} />
              <Route path="/left" element={<Left setTheme={setTheme}/>} />
              <Route path="/right" element={<Right setTheme={setTheme} />} />
              <Route path="/bothsides" element={<Both setTheme={setTheme}/>} />
              <Route path="/gript" element={<Gript setTheme={setTheme}/>} />
              <Route path="/rte" element={<Rte setTheme={setTheme}/>} />
              <Route path="/spiked" element={<Spiked setTheme={setTheme}/>} />
              <Route path="/gbnews" element={<Gbn setTheme={setTheme}/>} />
              <Route path="/sky" element={<Sky setTheme={setTheme}/>} />
              <Route path="/guardian" element={<Guardian setTheme={setTheme}/>} />
              <Route path="/dailymail" element={<Dmail setTheme={setTheme}/>} />
              <Route path="/dailysceptic" element={<Sceptic setTheme={setTheme}/>} />
              <Route path="/blaze" element={<Blaze setTheme={setTheme}/>} />
              <Route path="/timcast" element={<Timcast setTheme={setTheme}/>} />
              <Route path="/breitbart" element={<Breitbart setTheme={setTheme}/>} />
              <Route path="/infowars" element={<Info setTheme={setTheme}/>} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/saved" element={<Saved setTheme={setTheme}/>} />
                <Route path="/history" element={<History setTheme={setTheme} />} />
              </Route>
            </Routes>
      </ProSidebarProvider>
      </AuthContextProvider>
      </ThemeContext.Provider>
      </BrowserRouter>
    </QueryClientProvider>
    
  );
};


const rootElement = ReactDOM.createRoot(  document.getElementById("root") )
rootElement.render(<App />);
