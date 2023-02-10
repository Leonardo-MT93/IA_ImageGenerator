import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain invert" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm: p8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Routes>
      </main>
      <footer className="w-full flex justify-center  bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]  text-white">Desarrollado por Leonardo Tolaba - 2023</footer>
    </BrowserRouter>
  );
}

export default App;
