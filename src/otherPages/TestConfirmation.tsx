import React from 'react';
import { useLocation } from 'react-router-dom';

const TestConfirmation: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const textValue = searchParams.get('text');

  return (
    <div>
      <h2>Confirmation Page</h2>
      <p>Received Text: {textValue}</p>
    </div>
  );
};

export default TestConfirmation;
