import Homestyle from './Homestyle.css';
import Navbar from './Navbar';
import {Outlet,Link} from "react-router-dom";





function Home(){



    return(
        <>
           <div  id='front' style={Homestyle}>
            <Navbar/>
        <div className="head">
            <h1>Tic Tac Toe Game</h1>
            <p>welcome Tic Tac Toe game is friends are play school and college
                game.<br/>the game was popular in 2005 wonderful memories of school.
               <br/> this game definite you like it.let start!
            </p>
          <button className='btn' ><Link className='gta' to='/Game'>Press Here to Play</Link></button> 

        </div>
      
       
   <Outlet/>

        </div>

        </>
    )
}

export default Home;