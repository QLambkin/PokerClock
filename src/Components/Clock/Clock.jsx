import React from "react";
import { useState, useRef } from "react";
import "./Clock.scss";
import roundsData from "../../Rounds.json";

function Clock() {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("15:00");
  const [round, setRound] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    setIsRunning(true);
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const pauseTimer = (e) => {
    setIsRunning(false);
  };

  const clearTimer = (e) => {
    setTimer("15:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = (time) => {
    let deadline = new Date();

    // Adjust if adding more time
    deadline.setSeconds(deadline.getSeconds() + time);
    return deadline;
  };

  // useEffect(() => {
  //   clearTimer(getDeadTime());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime(900));
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
        <button onClick={onClickReset}>Start</button>
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
