const handleClick = () => {
  console.log('Button clicked');
};

const handleClickAgain = () => {
  console.log('Hello from handleClickAgain');
};

const handleClickAgainAgain = (name) => {
  console.log('Hello ' + name);
};

const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain();
        }}
      >
        Annon Function
      </button>
      <button
        onClick={() => {
          handleClickAgainAgain('mario');
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
