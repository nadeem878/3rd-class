import Child from "./Child";

const Parent = () => {
  const data = "Hello from the Parent component!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={data} />
    </div>
  );
};

export default Parent;
