import React, {useState,useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000
        );

        return () => {
            clearInterval(setIntervalId)
        }
    },[])


    function formatime(){
        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatime()}</span>
                </div>

            </div>

        </>
    );
}

export default DigitalClock