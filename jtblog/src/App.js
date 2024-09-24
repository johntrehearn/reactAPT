import './App.css';

function App() {
  // when we use {} React knows we want to use JavaScript / output a dynamic variable.

  const title = 'Welcome to the new blog';

  const likes = 50;

  // React converts to a string when rendering to the DOM.

  // We can use JavaScript expressions inside JSX by wrapping them in curly braces. i.e. A javascripts statment that outputs a value. Either a string or number or an array

  // The only thing we CANNOT output is booleans or objects.

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h2>{title}</h2>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{'Hello'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
      </div>
    </div>
  );
}

export default App;
