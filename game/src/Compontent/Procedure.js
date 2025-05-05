import Procedurestyle from './Procedurestyle.css';
import Footer from './Footer';
import Navbar from './Navbar';
function Procedure()
{


    return(
        <>
      
        <Navbar/>
    <div id="procedure" style={Procedurestyle}>
        <div className="procedure" style={Procedurestyle}>

            <h1>Procedure</h1>

            <h3>HOW TO PLAY</h3>
            <p>
                Choose your opponent<br/>
                Press a square to place your mark<br/>
                Make three in a row horizontally, vertically, or diagonally to win <br/>
                Watch your opponent and block them if they get 2 in a row<br/>
                Try a harder mode to keep it interesting<br/>
                Turn off sounds using the top right menu<br/>
                Use the top left menu to reset your scores for the current opponent</p>


            <h3>FEATURES</h3>
            <p>
                4 Computer difficulties to choose from<br/>
                Take turns playing with a friend in 2 player mode<br/>
                Beautiful graphics and animations<br/>
                Simple, pleasing sound effects<br/>
                Track your scores and reset them as you'd like<br/>
                Easy to use interface<br/>
                Completely free!<br/>
                Lightning fast loading</p>

        </div>

        <div className="game-img">
            <img src="./Images/game.png" alt="game-img"/>

        </div>

    </div>
   <Footer/>
        </>
    )
}


export default Procedure;