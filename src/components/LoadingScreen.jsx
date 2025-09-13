import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    //variables that control the loading screen text and animation
    const [text, setText] = useState("");
    const fullText = "<Loading Site...>";

    //useEffect that controls the loading screen animation  to run only once
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                },1000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]); // <- important: run only once and hide afterwards

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center animate-color-cycle"> 
            <div className="mb-4 text-5xl font-mono font-bold animate-color-cycle">
                {text}
                <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[300px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-red-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
}
