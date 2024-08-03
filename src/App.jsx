import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from './components/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="background">
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;