import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Medicos = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://docs.americasoftalmocenter.com/rotas/medicos', {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF0aGV1cyBTYW50b3MiLCJlbWFpbCI6Im1zYW50b3NAYW1lcmljYXNvZnRhbG1vY2VudGVyLmNvbSIsImlhdCI6MTY3Mzk5NzI0NywiZXhwIjoxNjc2NTg5MjQ3LCJzdWIiOiIyYTkyMT',
          Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
        }
      });
      setMedicos(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de médicos AA</h1>
      {medicos.map((medico) => (
        <div key={medico.id}>
          <p>Nome: {medico.name}</p>
          <p>CRM: {medico.crm}</p>
          <p>Especialidade: {medico.especialidade}</p>
        </div>
      ))}
    </div>
  );
};

export default Medicos;
