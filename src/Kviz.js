import React, { useState } from 'react';
import pitanja from './pitanja';
import Pitanje from './Pitanje';

function Kviz() {
  const [gotovKviz, setGotovKviz] = useState(false);
  const [listaOdgovora, setListaOdgovora] = useState([]);
  const [brojTacnihOdgovora, setBrojTacnihOdgovora] = useState(0);

  const onAnswerChange = (questionId, answerNumber) => {
    let pomocniNiz = [...listaOdgovora];
    pomocniNiz[questionId] = answerNumber;
    setListaOdgovora(pomocniNiz);
  };

  const proveraOdgovora = () => {
    let brojac = 0;
    listaOdgovora.forEach((odgovor, index) => {
      if (odgovor === pitanja[index].tacanOdgovor) {
        brojac = brojac + 1;
      }
    });
    setBrojTacnihOdgovora(brojac);
  };

  return (
    <div>
      {pitanja.map((sadrzaj, index) => (
        <Pitanje onAnswerChange={(answerNumber) => onAnswerChange(index, answerNumber)} selectedAnswer={listaOdgovora[index]} sadrzaj={sadrzaj} />
      ))}

      {gotovKviz ? (
        <div>Broj tacnih odgovora {brojTacnihOdgovora}</div>
      ) : (
        <button
          onClick={() => {
            setGotovKviz(true);
            proveraOdgovora();
          }}>
          Kraj
        </button>
      )}
    </div>
  );
}

export default Kviz;
