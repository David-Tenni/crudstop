import './App.css';

function App() {
  return (
    <div className="App">
      <h1>G'day</h1>
      <h3>Please enter information</h3>
    
      <div className="InputObject">
        
      <label for="ObjectTitle">Object Title </label>
      <br/>
      <input type="text" name="ObjectTitle" />
      <br/>
      <label for="ObjectContent">Object Content </label>
      <br/>
      <input type="text" name="ObjectContent" />
      <br/>
      <button>submit</button>
      </div>
    </div>
  );
}

export default App;
