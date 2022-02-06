import React, { useState } from 'react';
import './Pitanje.css';

function Pitanje({ sadrzaj, selectedAnswer, onAnswerChange }) {
  const [selektovanOdgovor, setSelektovanOdgovor] = useState(selectedAnswer);
  return (
    <div className='pitanje'>
      <div>{sadrzaj.pitanje}</div>
      {sadrzaj.odgovori.map((odgovor, key) => {
        return (
          <div className='ponudjeniOdgovori'>
            <input
              onClick={() => {
                onAnswerChange(key);
                setSelektovanOdgovor(key);
              }}
              checked={selektovanOdgovor === key}
              type='radio'
            />
            <div>{odgovor}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Pitanje;
