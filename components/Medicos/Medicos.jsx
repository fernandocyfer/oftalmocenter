import React, { useState, useEffect } from 'react';

function MedicosList() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    async function fetchMedicos() {
      const response = await fetch('https://onboarding-b.herokuapp.com/v2/medico');
      const data = await response.json();
      setMedicos(data);
    }
    fetchMedicos();
  }, []);

  return (
    <div>
      <h2>Lista de Médicos</h2>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>
            <p>{medico.nome}</p>
            <p>{medico.especialidade}</p>
            <p>{medico.crm}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicosList;
