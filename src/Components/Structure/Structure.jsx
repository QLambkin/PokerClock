import React from "react";
import './Structure.scss';
import roundsData from '../../Rounds.json'

function Structure() {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Blinds</th>
          <th scope="col">Ante</th>
        </tr>
      </thead>
      <tbody>
        {roundsData.rounds.map((round, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{round.blinds}</td>
              <td>{round.ante}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Structure;
