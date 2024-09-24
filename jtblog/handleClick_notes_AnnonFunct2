const handleClick = (e) => {
  console.log('Button clicked', e);
};

const handleClickAgain = (name, e) => {
  console.log('Hello ' + name, e);
};

const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain('mario', e);
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
