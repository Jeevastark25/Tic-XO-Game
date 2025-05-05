import {Outlet,Link} from "react-router-dom";
import Navbarstyle from './Navbarstyle.css';
function Navbar() {




    return (
                    <>
            <div id={Navbarstyle.preface} >
                <div className={Navbarstyle.navbar}>
                    <nav>
                
                        <ul>
                            <li><Link className="name-nav" to="/Home">Home</Link></li>
                            <li><Link className="name-nav" to="/About">About</Link></li>
                            <li><Link className="name-nav" to="/Procedure">Procedure</Link></li>

                        </ul>
                    </nav>

                </div>



                <Outlet/>


                </div>
                </>
            

            )  
    }


    export default Navbar;