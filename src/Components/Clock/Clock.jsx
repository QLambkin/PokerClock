import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Clock.scss";
import roundsData from "../../Rounds.json";

function Clock() {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00");
  const [round, setRound] = useState(1);

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
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
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

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 900);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mounts the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
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
      {/* <button onClick={startTimer}>Start</button> */}
      <button onClick={onClickReset}>Reset</button>
      {/* <button onClick={pauseTimer}>Pause</button> */}
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
