import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
