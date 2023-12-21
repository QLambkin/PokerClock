import React, { useEffect } from "react";
import { useState } from "react";
import "./Clock.scss";
import roundsData from "../../Rounds.json";

function Clock() {
  const [timer, setTimer] = useState("15:00");
  const [round, setRound] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(899);

  let elapsed = 60;

  useEffect(() => {
    
    const countdown = setInterval(() => {
      if (timeLeft < 0) {
        clearInterval(countdown);
        return;
      }

      if (!isRunning) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        elapsed = timeLeft;
        return;
      }

      setTimeLeft(timeLeft - 1);

      let { total, minutes, seconds } = getTimeRemaining(timeLeft);
      if (total >= 0) {
        setTimer(
          (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
      }
    }, 1000);
    return () => clearInterval(countdown);
  });

  const getTimeRemaining = (e) => {
    const total = e;
    console.log("The total is: " + total);
    const seconds = Math.floor(total % 60);
    const minutes = Math.floor(total / 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    if (isRunning) {
      setTimeLeft(elapsed);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const onClickReset = () => {
    setIsRunning(false);
    setTimeLeft(900);
  };

  const nextRound = () => {
    setRound(round + 1);
    onClickReset();
  };

  const prevRound = () => {
    setRound(round - 1);
    onClickReset();
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h2>{timer}</h2>
      {round > 1 && <button onClick={prevRound}>Prev</button>}
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}
      {round < 16 && <button onClick={nextRound}>Next</button>}

      <div className="blinds">
        <div className="round-name">{roundsData.rounds[round - 1].name}</div>
        <div className="blinds">{roundsData.rounds[round - 1].blinds}</div>
        <div className="next-blinds">
          Next: {round >= 16 ? "N/A" : roundsData.rounds[round].blinds}
        </div>
        <div className="prev-blinds">
          Prev: {round <= 1 ? "N/A" : roundsData.rounds[round - 2].blinds}
        </div>
      </div>
    </div>
  );
}

export default Clock;

// auto next round when time is up
// flash a color and make a noise when time is under 10 seconds and when over
// change clock color when time is under 10 seconds