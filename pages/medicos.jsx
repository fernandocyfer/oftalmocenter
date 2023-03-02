import { useState, useEffect } from 'react';

function MedicoList({ medicos }) {
  return (
    <div>
      <h2>Lista de Médicos</h2>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>
            <p>{medico.nome}</p>
            <p>{medico.crm}</p>
            <p>{medico.especialidade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const login = 'seu_login';
  const senha = 'sua_senha';
  const token = 'seu_token';

  const response = await fetch('https://onboarding-b.herokuapp.com/v2/medico', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-User-Email': login,
      'X-User-Token': senha,
    },
  });

  const medicos = await response.json();

  return {
    props: { medicos },
  };
}

function MedicoPage({ medicos }) {
  return <MedicoList medicos={medicos} />;
}

export default MedicoPage;
