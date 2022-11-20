import React from 'react';
import publicRouter from './Routes/PublicRouter';
import NotFound from './Layout/NotFound';
import { Routes, useNavigate, Route } from 'react-router-dom';

function App() {
  let navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>
      <Routes>
        {publicRouter(handleNavigate)}
        <Route path="*" element={<NotFound handleNavigate={handleNavigate} />} />
      </Routes>
    </>
  );
}

export default App;
