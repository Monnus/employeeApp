import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from "./Pages/components/layout";
import SignContainer from "./Pages/components/signInFrom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/pages/sign" element={<SignContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
