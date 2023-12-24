import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile.jsx";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
export default function App(){
    return(
        <>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </>
    )
}