import Buttonstyle from './Buttonstyle.css';
function Button(index){

    const {arr,io,me}=index;
    
    
        
    
        return (
           <button className={
                arr&&((arr==="x")?"xbtn":"obtn")
            }  onClick={()=>{me(io)}}></button>
        );
    }
    
    export default Button;