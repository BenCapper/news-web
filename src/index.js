import './App.css';
import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";


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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const rootElement = ReactDOM.createRoot(  document.getElementById("root") )
rootElement.render(<App />);
