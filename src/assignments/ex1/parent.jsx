import  { useState } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback: a new function is created on every re-render
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }) => {
  // Without memoization, ChildComponent will re-render unnecessarily
  return <button onClick={onClick}>Click me</button>;
};

export default ParentComponent;
