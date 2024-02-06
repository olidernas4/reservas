import React from 'react';

const Sala = ({ sala, onSelectSala }) => {
  return (
    <div className="sala" onClick={() => onSelectSala(sala)}>
      <h3>{sala.nombre}</h3>
      <p>Capacidad total: {sala.capacidadTotal}</p>
      <p>Capacidad disponible: {sala.capacidadDisponible}</p>
    </div>
  );
};

export default Sala;