import Aboutstyle from './Aboutstyle.css';
import Navbar from './Navbar';

function About(){




    return(
        <>
        <Navbar/>
    <div id="about" style={Aboutstyle}>
        <div class="about" style={Aboutstyle}>
        <h1>About </h1>
      <h3>RULES</h3>
        <p>
            Tic-Tac-Toe is a simple and fun game for 2 players, X and O. It is played on a 3x3 grid. Each player's goal is to make 3 in a row.

Typically, X starts first, but in Gametable's Tabletop Tic Tac Toe, Player 1 starts first on the first game and Player 2 (or the computer) starts first on the next game. The starting player continues to alternate from game to game. This helps keep gameplay fair over time.

Players take turns placing their Mark, X or O, on an open square in the grid. The first player to make 3 of their own mark in a row vertically, horizontally, or diagonally wins the game.

If all 9 squares are filled and neither player has 3 in a row, the game is considered a Tie.

The expert artificial intelligence (AI) will play a perfect game. Try your best to Tie it for as long as you can!
        </p>


        <h3>ZERO-SUM GAME</h3>
        <p>
            Tic-Tac-Toe is a zero-sum game, which means that if both players are playing their best,
             the game will end in a Tie. However, if you learn how to play tic-tac-toe and master some simple strategies, then
             you'll be able to not only play, but to win the majority of the time.
        </p>
        <h3>HISTORY</h3>
        <p>Tic-Tac-Toe is a long beloved classic pen and paper or board game for two players.
             Variations of Tic Tac Toe have been played since the Roman Empire and 
            3 in a row games can be traced all the way back to ancient Egypt!</p>


        <h3>NOUGHTS AND CROSSES</h3>
        <p>Tic Tac Toe is known by a few other names around the world. 
            The most common of these is "Noughts and Crosses"
             and it is sometimes simply referred to as the "XO game."</p>

            </div>
    </div>

        </>
    )
}

export default About;