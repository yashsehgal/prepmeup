
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

const formatTime = (time: number) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

function Timer({ seconds }: any) {
  const totalTime = seconds;
  const [progressVal, setProgressVal] = useState(0);
  const [timer, setTimer] = useState(seconds);
  const timerId: any = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer((prev: number) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    const percent = ((totalTime-timer) / seconds) * 100; // Calculate progress relative to 'seconds'
    setProgressVal(percent);
    if (timer <= 0) {
      clearInterval(timerId.current);
      alert("Time up!");
    }
  }, [timer, seconds]);

  return (
    <div className="remainingTime-progress-wrapper w-3/4 flex flex-col gap-4">
      <div className="remaining-time-wrapper">
        <div className="remaining-time flex justify-between">
          <h3 className="font-semibold text-lg">Remaining Time</h3>
          <div className="text-neutral-400 font-medium">{formatTime(timer)}</div>
        </div>
      </div>
      <Progress value={progressVal}/>
    </div>
  );
}

export { Timer };

