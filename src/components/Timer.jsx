import React, { useState, useEffect } from 'react'

function Timer() {
    const [time, setTime] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);


    const updateTime = () => {
        const total = hours * 3600 + minutes * 60 + seconds;
        setTime(total);
    };

    useEffect(() => {
        let interval;

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000)
        }

        if (time === 0 && isRunning) {
            setIsRunning(false);
            alert("Time's UP !!!");
        }

        return () => clearInterval(interval);

    }, [isRunning, time])

    const handleStart = () => {
        const total = hours * 3600 + minutes * 60 + seconds;

        if (total > 0) {
            setTime(total);
            setIsRunning(true);
        }
    }
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setHours(0);
        setSeconds(0);
        setMinutes(1);
        setIsRunning(false);
        setTime(60);
    };

    const formatTime = () => {
        const hrs = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = Math.floor(time % 60);

        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="text-center p-6 bg-[#F2E3C6] rounded-xl">


            <div className='flex justify-center gap-3 my-5'>
                <input type="number"
                    value={hours}
                    disabled={isRunning}
                    min={0}
                    onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                    className="w-16 p-2 border rounded text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:scale-105"
                    placeholder='HH' />






                <input type="number"
                    value={minutes}
                    disabled={isRunning}
                    onChange={(e) => setMinutes(Math.max(0, Number(e.target.value)))}
                    className="w-16 p-2 border rounded text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:scale-105"
                    placeholder='MM' />





                <input type="number"
                    value={seconds}
                    disabled={isRunning}
                    onChange={(e) => setSeconds(Math.max(0, Number(e.target.value)))}
                    className="w-16 p-2 border rounded text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:scale-105"
                    placeholder='SS' />
            </div>




            <h2
                className={`text-5xl font-mono my-4 transition-all duration-300 ${isRunning ? "scale-105 text-green-500" : ""
                    }`}
            >
                {formatTime()}
            </h2>

            <div className="space-x-3">


                <button
                    onClick={handleStart}
                    disabled={isRunning || time === 0}
                    className={`px-4 py-2 rounded transition-all duration-200 transform ${isRunning || time === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95"
                        }`}
                >
                    Start
                </button>

                <button
                    onClick={handlePause}
                    disabled={!isRunning}
                    className={`px-4 py-2 rounded transition-all duration-200 transform ${!isRunning
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-yellow-500 hover:bg-yellow-600 hover:scale-105 active:scale-95"
                        }`}
                >
                    Pause
                </button>

                <button
                    onClick={handleReset}
                    className="bg-red-500 px-4 py-2 rounded transition-all duration-200 transform hover:bg-red-600 hover:scale-105 active:scale-95"
                >
                    Reset
                </button>
            </div>


        </div>
    )
}

export default Timer