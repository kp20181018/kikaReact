import React from 'react';
import './Resenje.css';

function Resenje(props) {
  const indexTacnogOdgovora = props.pitanje.tacanOdgovor;
  const odg = props.pitanje.odgovori[indexTacnogOdgovora];
  return (
    <div className='resenje'>
      <div className='pitanje'>{props.pitanje.pitanje}</div>
      <div className='tacanOdgovor'>{odg}</div>
      <img src={props.pitanje.slika}></img>
      <div>{props.pitanje.opisResenja}</div>
    </div>
  );
}

export default Resenje;
