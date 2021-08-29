import './App.css';

function App() {
  return (
    <div className="App">
      <h1>G'day</h1>
      <h3>Please enter information</h3>
    
      <div className="InputArticle">
        
      <label for="ArticleTitle">Article Title </label>
      <br/>
      <input type="text" name="ArticleTitle" />
      <br/>
      <label for="ArticleContent">Article Content </label>
      <br/>
      <input type="text" name="ArticleContent" />
      <br/>
      <button>submit</button>
      </div>
    </div>
  );
}

export default App;
