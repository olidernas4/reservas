import React, { useState } from 'react';
import Sala from './Sala';
import ReservaForm from './ReservaForm';
import ReservaItem from './ReservaItem';
import './SalaJuntas.css'; 

const SalaJuntas = () => {
  //verifica la capcidade de las salas
  const [salas, setSalas] = useState([
    { id: 1, nombre: "Sala amarilla", capacidadTotal: 5, capacidadDisponible: 5, reservas: [] },
    { id: 2, nombre: "Sala azul", capacidadTotal: 6, capacidadDisponible: 6, reservas: [] },
  ]);
  const [selectedSala, setSelectedSala] = useState(null);
  const [reservas, setReservas] = useState([]);

  const selectSala = (sala) => {
    setSelectedSala(sala);
  };

  const reservarSala = (reserva) => {
    const salaSeleccionada = salas.find((s) => s.id === reserva.salaId);

    if (salaSeleccionada && salaSeleccionada.capacidadDisponible > 0) {
      const updatedSalas = salas.map((s) => {
        if (s.id === reserva.salaId) {
          return {
            ...s,
            capacidadDisponible: s.capacidadDisponible - 1,
            reservas: [...s.reservas, reserva],
          };
        } else {
          return s;
        }
      });

      setSalas(updatedSalas);
      setReservas([...reservas, reserva]);
    } else {
      alert('Las reservas alcanzaron el cupo máximo. Por favor, selecciona otra sala.');
    }
  };

  return (
    
    <div className="container">
      
      <h1>Reservas de Salas</h1>

      {salas.map((sala) => (
        <Sala key={sala.id} sala={sala} onSelectSala={selectSala} />
      ))}

      {selectedSala && <ReservaForm sala={selectedSala} onReservar={reservarSala} />}

      <div>
        <h2>Listado de Reservas</h2>
        <div className="reservas-container">
          {reservas.map((reserva, index) => (
            <ReservaItem
              key={index}
              salaNombre={salas.find((s) => s.id === reserva.salaId)?.nombre}
              startTime={reserva.startTime}
              endTime={reserva.endTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalaJuntas;
