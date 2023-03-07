import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const Medicos = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      const response = await fetch('https://docs.americasoftalmocenter.com/rotas/medicos', {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF0aGV1cyBTYW50b3MiLCJlbWFpbCI6Im1zYW50b3NAYW1lcmljYXNvZnRhbG1vY2VudGVyLmNvbSIsImlhdCI6MTY3Mzk5NzI0NywiZXhwIjoxNjc2NTg5MjQ3LCJzdWIiOiIyYTkyMT'
        }
      });
      const data = await response.json();
      setMedicos(data);
    };
    fetchMedicos();
  }, []);

  return (
    <div>
      <h1>Medicos</h1>
      <ul>
        {medicos.map(medico => (
          <li key={medico.id}>
            <p>{medico.name}</p>
            <p>{medico.especialidadeonmedico}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medicos;
