import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';


const Medicos = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      const response = await fetch('https://onboarding-b.herokuapp.com/v2/medico', {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF0aGV1cyBTYW50b3MiLCJlbWFpbCI6Im1zYW50b3NAYW1lcmljYXNvZnRhbG1vY2VudGVyLmNvbSIsImlhdCI6MTY3Mzk5NzI0NywiZXhwIjoxNjc2NTg5MjQ3LCJzdWIiOiIyYTkyMT',
          Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
        },
        method: 'POST'
      });
      const data = await response.json();
      setMedicos(data);
    };
    fetchMedicos();
  }, []);

  return (
    <div className='container'>
      <h1>Medicos</h1>
      <div>
        {medicos.map(medico => (
          <div className='col-md-6 d-flex' key={medico.id}>
            <p>{medico.name}</p>
            <p>{medico.crm}</p>
            <p>{medico.especialidadeonmedico[0].especialidades.especialidade}</p>
          </div>
        ))}
        
      </div>
    </div>
    
    
  );
};

export default Medicos;
