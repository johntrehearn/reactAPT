const handleClick = () => {
  console.log('Button clicked');
};

const handleClickAgain = (name) => {
  console.log('Hello ' + name);
};

const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          console.log('Hello');
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
