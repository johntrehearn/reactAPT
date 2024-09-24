import './App.css';

function App() {
  // when we use {} React knows we want to use JavaScript / output a dynamic variable.

  const title = 'Welcome to the new blog';

  const likes = 50;

  // React converts to a string when rendering to the DOM.

  // We can use JavaScript expressions inside JSX by wrapping them in curly braces.

  // The only thing we CANNOT output is booleans or objects.

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h2>{title}</h2>
        <p>Liked {likes} times</p>
      </div>
    </div>
  );
}

export default App;
