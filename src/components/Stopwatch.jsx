import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 10);
            }, 10);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = () => {
        const hrs = Math.floor(time / 3600000);
        const mins = Math.floor((time % 3600000) / 60000);
        const secs = Math.floor((time % 60000) / 1000);
        const millisecs = Math.floor((time % 1000) / 10);

        return `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs
                .toString()
                .padStart(2, "0")}:${millisecs
                    .toString()
                    .padStart(2, "0")}`;
    };


    const handleLap = () => {
        if (isRunning) {
            setLaps((prev) => [...prev, formatTime()]);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 bg-[#F6DBDB] w-80 px-4 py-4 rounded-2xl">

            <h1 className="text-4xl font-bold">{formatTime()}</h1>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
                <button
                    onClick={() => setIsRunning(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Start
                </button>

                <button
                    onClick={() => setIsRunning(false)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Stop
                </button>



                <button
                    onClick={() => {
                        setIsRunning(false);
                        setTime(0);
                        setLaps([]);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
                <button
                    onClick={handleLap}
                    disabled={!isRunning}
                    className="bg-[#3562bc] text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Lap
                </button>
            </div>

            {/* Laps Display */}
            <div className="w-full mt-4 max-h-40 overflow-y-auto">
                {laps.map((lap, index) => (
                    <div
                        key={index}
                        className="flex justify-between bg-white px-3 py-1 rounded mb-2"
                    >
                        <span>Lap {index +1}</span>
                         <span>{lap}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stopwatch;