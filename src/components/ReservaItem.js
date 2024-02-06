import React from 'react';

const ReservaItem = ({ salaNombre, startTime, endTime }) => {
  return (
    <div className="reserva-item">
      <h3>{salaNombre}</h3>
      <p>Hora de inicio: {startTime}</p>
      <p>Hora de fin: {endTime}</p>
    </div>
  );
};

export default ReservaItem;
