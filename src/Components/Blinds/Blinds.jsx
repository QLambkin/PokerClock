// import React, { useState } from "react";
// import roundsData from "../../Rounds.json";

// function Blinds(props) {
//   const [round, setRound] = useState(1);

//   const nextRound = () => {
//     setRound(round + 1);
//   };

//   const prevRound = () => {
//     setRound(round - 1);
//   };

//   return (
//     <div className="blinds">
//       <div className="round-name">{roundsData.rounds[round - 1].name}</div>
//       <div className="blinds">{roundsData.rounds[round - 1].blinds}</div>
//       <div className="next-blinds">
//         Next: {roundsData.rounds[round].blinds}
//       </div>
//       <div className="prev-blinds">
//         Prev: {round === 1 ? "N/A" : roundsData.rounds[round - 2].blinds}
//       </div>
//     </div>
//   );
// }

// export default Blinds;
