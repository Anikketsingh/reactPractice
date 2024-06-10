import React,{useState,useRef,useEffect} from "react"
function StopWatch(){
    const[isRunning,setIsRunning]=useState(false);
    const[elapsedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);
    useEffect(()=>{
       if(isRunning){
    intervalIdRef.current=    setInterval(() => {
            setElapsedTime(Date.now()-startTimeRef.current)
        }, 10);
        return()=>{
            clearInterval(intervalIdRef.current);
        }
       }

    },[isRunning]);
    function start(){
        setIsRunning(true);
        startTimeRef.current =Date.now()-elapsedTime;
    }
    function stop(){
        setIsRunning(false);
        
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false)
    }
    function formatTime(){
        let hours=Math.floor(elapsedTime/(1000*60*60))
        let minutes=Math.floor(elapsedTime/(1000*60)%60)
        let seconds=Math.floor(elapsedTime/(1000)%60)
        let milli=Math.floor(elapsedTime%1000/10)
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milli)}`;

    }
    function padZero(number){
        return (number <10 ?"0":"")+number;
    }
    
    

    return(
        <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
        <div className="buttonss">
            <button className="start" onClick={start}>START</button>
            <button onClick={stop} className="stop">STOP</button>
            <button  onClick={reset} className="reset">RESET</button>
        </div>
    </div>
    )
}
export default StopWatch