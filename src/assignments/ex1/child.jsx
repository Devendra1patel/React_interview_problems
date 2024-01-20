import React, { useState, useCallback } from 'react';

const ParentComponent2 = () => {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the function
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the function doesn't depend on any props or state

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  // With memoization, ChildComponent won't re-render unnecessarily
  return <button onClick={onClick}>Click me</button>;
});

export default ParentComponent2;
