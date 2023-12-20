import React from "react";
import './Structure.scss';

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
        <tr>
          <th scope="row">1</th>
          <td>1/2</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>2/4</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>5/10</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>10/20</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>15/30</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>20/40</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>25/50</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>30/60</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>40/80</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>50/100</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>60/120</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>70/140</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">13</th>
          <td>75/150</td>
          <td>20</td>
        </tr>
        <tr>
          <th scope="row">14</th>
          <td>100/200</td>
          <td>20</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>150/300</td>
          <td>20</td>
        </tr>
        <tr>
          <th scope="row">16</th>
          <td>200/400</td>
          <td>20</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Structure;
