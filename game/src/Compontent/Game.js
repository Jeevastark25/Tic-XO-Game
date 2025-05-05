import Button from "./Button";
import { useState } from "react";
import {Outlet,Link} from "react-router-dom";

import './Gamestyle.css';
function Game() {

  const [b, setbtn] = useState(["", "", "", "", "", "", "", "", ""]);//Array of Button
  const [p, setp] = useState("x");//X or O value set
  const [status, winstatus] = useState("");// win status
  let [countX,setX]=useState(0);
  let [countO,setO]=useState(0);
  let [countdraw,setDraw]=useState(0);
 let check = (ind) => { //Onclick Function
    if (!status) { //not win
      console.log(ind);//print index 
      if (b[ind] === "") {//button value print before empty
        let copy = b.with(ind, p);//update value x or o
        setbtn(copy);// update value set Array
       
        setp((p === "x") ? "o" : "x");//x or o print condition ternary operator
        let msg = wincheck(copy);
        winstatus(msg);
        

        // if (msg) {
        //   alert(msg);
        // }

      }


      
    }



  }


  function wincheck(box) {



    for (let r = 0, c = 0, d = 2; r < 9, c <= 3; r += 3, c++) {

      const row = box.slice(r, r + 3).join();
      console.log(row);

      let column = box[c] + box[c + 3] + box[c + 6];
      console.log(column);

      let Leftdiagonal = (box[0] + box[d + 2] + box[d + 6]);
      let Rightdiagonal = (box[d] + box[d + 2] + box[d + 4]);


      let xwin = (row === "x,x,x" || column === "xxx" || Leftdiagonal === "xxx" || Rightdiagonal === "xxx") ? true : false;
      let owin = (row === "o,o,o" || column === "ooo" || Leftdiagonal === "ooo" || Rightdiagonal === "ooo") ? true : false;
      let draw = box.every(item => item !== "")?true:false;
      let result = (xwin && "X Won the Game!!") || (owin && "O Won the Game!!")||(draw&& "No! Game Draw !");
      if( result)
        { 
          return result
    
        }

      }


     
      
    }


  
  

  return (
    <>
    <div id="preface">
        <div className="now">
            
              
                
                    <b><Link to='/Home' className="back">Back to Home</Link></b>     
            

            <Outlet/>
        </div>
<div id="row">
    <div className="counter">
        <table>
            <thead className="thead">
            <th
             className={
              p&&((p==="x"?"borderx":"borderxo"))
            }
             ><span class="x-color">X</span>-Player</th>
            <th
              className={
                status && (status.includes("D")&&"drwt")||((!status)&&"nodrw")
                }
             >Tiles</th>
            <th
             className={
              p&&((p==="o"?"bordero":"borderox"))
            }
             ><span class="o-color">O</span>-Player</th>
        </thead>
            <tbody>
            <td id="turn-1" 
               className={
                status && (status.includes("X") && countX++)
                }
            >{countX}</td>
            <td id="turn-2"
             className={
              status && (status.includes("D") && countdraw++)
              }
            >{countdraw}</td>
            <td id="turn-3"
             className={
              status && (status.includes("O") && countO++)
              }
            >{countO}</td>
        </tbody>
        </table>


        
    <div id="gif">
        <div id="gif1"
        className={
          p&&((p==="x"?"redteam":"blueteam"))
        }
        >
           {/***gif for XO Teams***/}
           
    <div  
        className={
          status &&
          ((status.includes("X") && "xcolor") ||
            (status.includes("O") && "ocolor") || "draw")
            
        }
      >
        
        {status && <div>
          <div  className="pop" >
          <img src="./Images/win.gif" alt="boy-cheer"></img>
          <p>{status}</p>
          </div>
          </div>
          }
      </div>



        </div>
    </div>

 
    </div>

        <div id="board">
            {/**Board */}

            

      <div className="mainboard">
        <div className="boxs">
          {b.map((v,i)=>{

        return  (<Button key={i}  arr={v} io={i} me={check} />);
          })}
          {/* <Button arr={b[1]} i="1" me={check} />
          <Button arr={b[2]} i="2" me={check} />

          <Button arr={b[3]} i="3" me={check} />
          <Button arr={b[4]} i="4" me={check} />
          <Button arr={b[5]} i="5" me={check} />

          <Button arr={b[6]} i="6" me={check} />
          <Button arr={b[7]} i="7" me={check} />
          <Button arr={b[8]} i="8" me={check} /> */}
        </div>
      </div>
  
  <div>
    <label type="button" className="reset"
    onClick={()=>{
     setbtn(b.fill(""));
     setp("x");
     setX(countX);
     setO(countO);
     setDraw(countdraw);
     winstatus("")
    }}
    >Reset</label>
  </div>

        </div>

        
   
    </div>
    </div>


    </>
  );
}

export default Game;