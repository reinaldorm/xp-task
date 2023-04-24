import React from 'react';

interface WarnProps {
  level: 1 | 2 | 3;
  message: string;
}

const Warn = ({ level, message }: WarnProps) => {
  return <div>{message}</div>;
};

export default Warn;
