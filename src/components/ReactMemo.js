import React from 'react';

const ReactMemoComponent = React.memo(({ count }) => {
  console.log('ReactMemoComponent rendered');
  return (
    <div>
      <h3>React.memo Demonstration</h3>
      <p>Current count from parent: {count}</p>
      <p>This component only re-renders when count prop changes.</p>
    </div>
  );
});

export default ReactMemoComponent;