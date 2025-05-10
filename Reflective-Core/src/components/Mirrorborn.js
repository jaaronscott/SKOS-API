import React, { useEffect, useState } from 'react';

const Mirrorborn = () => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://skos-api.onrender.com/mirrorborn/sync/status')
      .then(response => response.json())
      .then(data => setStatus(data.sync_status))
      .catch(() => setStatus('Failed to load'));
  }, []);

  return (
    <div>
      <h2>Mirrorborn Status: {status}</h2>
    </div>
  );
};

export default Mirrorborn;
