import React, { useState, useEffect } from 'react';

const ReservaForm = ({ sala, onReservar }) => {
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [horasReservadas, setHorasReservadas] = useState([]);

  useEffect(() => {
    // Actualizar el estado de horasReservadas cuando cambia la sala
    setHorasReservadas(sala.reservas.map(reserva => reserva.startTime));
  }, [sala.reservas]);

  const handleReservar = () => {
    // Valida y procesa la reserva
    if (startHour && endHour) {
      const horaInicio = parseInt(startHour);
      const horaFin = parseInt(endHour);

      // Verificar si el horario ya está ocupado en la sala actual
      const horarioOcupado = horasReservadas.some(reserva =>
        horaInicio === parseInt(reserva) || horaFin === parseInt(reserva)
      );

      // Verificar que la hora de inicio no sea anterior a la hora final
      const horaValida = horaInicio < horaFin;
      if (!horarioOcupado && horaValida) {
        const reserva = {
          salaId: sala.id,
          startTime: `${startHour}:00`,
          endTime: `${endHour}:00`,
        };
        onReservar(reserva);
        
        setStartHour('');
        setEndHour('');
        setHorasReservadas([...horasReservadas, startHour, endHour]);
      } else {
        if (horarioOcupado) {
          alert('El horario seleccionado está ocupado. Por favor, elige otro horario.');
        } else {
          alert('La hora de inicio debe ser anterior a la hora final. Por favor, selecciona un horario válido.');
        }
      }
    } else {
      alert('Selecciona las horas de inicio y fin por favor ');
    }
  };
  // Opciones de horas de 8 AM a 6 PM;
  const horasDisponibles = Array.from({ length: 11 }, (_, i) => i + 8);

  return (
    <div className="inputRedon">
      <h2>Reservar Sala {sala.nombre}</h2>
      <select value={startHour} onChange={(e) => setStartHour(e.target.value)}>
        <option value="">Selecciona hora inicio</option>
        {horasDisponibles.map((hora) => (
          <option key={hora} value={hora}>{hora}:00</option>
        ))}
      </select>

      <select value={endHour} onChange={(e) => setEndHour(e.target.value)}>
        <option value="">Selecciona hora final</option>
        {horasDisponibles.map((hora) => (
          <option key={hora} value={hora}>{hora}:00</option>
        ))}
      </select>

      <button className="btnReserva" onClick={handleReservar}>Reservar Sala</button>
    </div>
  );
};

export default ReservaForm;
