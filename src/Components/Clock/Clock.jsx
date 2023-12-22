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
      if (total === 0 && round < 16) {
        nextRound();
      }
    }, 1000);

    return () => clearInterval(countdown);
  });

  const getTimeRemaining = (e) => {
    const total = e;
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
    setIsRunning(true);
    setTimeLeft(899);
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
    <div className="clock-side">
      {timeLeft < 30 ? (
        <div className="timer low-time">{timer}</div>
      ) : (
        <div className="timer">{timer}</div>
      )}
      <div className="buttons">
        {round > 1 ? (
          <button className="btn btn-outline-light" onClick={prevRound}>Prev</button>
        ) : (
          <button className="btn btn-outline-light" style={{ opacity: 0 }} disabled>
            Prev
          </button>
        )}
        {!isRunning ? (
          <button className="btn btn-outline-success" onClick={startTimer}>Start</button>
        ) : (
          <button className="btn btn-outline-danger" onClick={pauseTimer}>Pause</button>
        )}
        {round < 16 ? (
          <button className="btn btn-outline-light" onClick={nextRound}>Next</button>
        ) : (
          <button className="btn btn-outline-light" style={{ opacity: 0 }} disabled>
            Next
          </button>
        )}
      </div>

      <div className="container blind-info">
        <div className="row">
          <div className="round-name">{roundsData.rounds[round - 1].name}</div>
          <div className="blinds">{roundsData.rounds[round - 1].blinds}</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="prev-blinds">
              {round <= 1 ? "" : "Prev: " + roundsData.rounds[round - 2].blinds}
            </div>
          </div>
          <div className="col">
            <div className="next-blinds">
              {round >= 16 ? "" : "Next: " + roundsData.rounds[round].blinds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;

// flash a color and make a noise when time is under 10 seconds and when over
// change clock color when time is under 10 seconds
// highlight active round on table
