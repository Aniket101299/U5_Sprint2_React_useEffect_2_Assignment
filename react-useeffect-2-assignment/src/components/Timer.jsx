import { useEffect, useState } from "react";

export const Timer = ({initialTime,endTime}) => {

const [timer,setTimer] = useState(initialTime);    
const [timerStart, setTimerStart] = useState(false);

const xyz = ()=> {
    setTimerStart(!timerStart);
    setTimer(+initialTime);
}

    useEffect(()=> {
        const id = setInterval(()=>{
            if(timer=="") {
                return;
            } else {
                setTimer((prev)=>{
                   
                    if(prev == endTime) {
                        clearInterval(id);
                        return "stop";
                    }
                    return prev + 1;
                })
            }
      
        },1000)
        },[timerStart])


    return (
       <>
       
         <div>Start Time : {initialTime} </div> 
         <div>End Time : {endTime} </div> 

        <h2>Timer : {timer}</h2>
          
        <button onClick={()=>{
          xyz()
        }}>Start</button>  
        
       </>
    )
   

}