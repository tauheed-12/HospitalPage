import {Link} from "react-router-dom"
export default function Navbar(){
  return( 
  <div className="Navbar">
        <div className="Navbar1">
           <div>Dr Mainik Dlavi</div>
        </div>
        <div className="Navbar2">
            <div className="NavbarComp">
            <Link to="/" id="home-opt">Home</Link></div>
            <div className="NavbarComp">Treatments</div>
            <div className="NavbarComp">Health Blogs</div>
            <div className="NavbarComp">About Me</div>
            <button className="submit"><Link to="/profile" id="But-App">Book Appointement</Link></button>
        </div>
    </div>
    )
}