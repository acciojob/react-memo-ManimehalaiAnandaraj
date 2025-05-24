import React, { useMemo } from 'react';

function UseMemo({ data }) {
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    return data.length * 100;
  }, [data]);

  return (
    <div>
      <h3>useMemo Demonstration</h3>
      <p>Total todos calculated value: {expensiveCalculation}</p>
    </div>
  );
}

export default UseMemo;